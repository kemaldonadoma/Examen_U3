const http = require('http');
const path = require('path');
const status = require('http-status');

let _fanpage;

//crear fanpage
const createFanPg = (req,res)=>{
    const fanpg = req.body;
    _fanpage.create(fanpg)
    .then((data)=> {
        res.status(200);
        res.json({msg:"Fan Page creada exitosamente", data: data});
    })
    .catch((err)=> {
        res.status(400);
        res.json({msg:"Error!!!!", data:err});
    })
}

// comentar
const comentarPG = (req,res) => {
    _fanpage.findOneAndUpdate({_id:req.params.id},{$push:{coments:req.body.coments}})
    .then((data)=>{
        res.status(status.OK);
        res.json({msg:"Se ha agregado comentario", data:data});

    }).catch((err)=>{
        res.status(status.NOT_FOUND);
        res.json({msg:"No se pudo agregar comentario",err:err});
    });
    
}

const findAll = (req, res) =>{
    _fanpage.findById ({_id:req.params.id})
    .then((data) => {
        if(data.length == 0){
            res.status(status.NO_CONTENT);
            res.json({msg:"No se enconontraron comentarios"});
        }else{
            res.status(status.OK);
            res.json({msg:" comentarios!!! ",data:data.coments});
        }
    })
    .catch((err)=>{
        res.status(status.BAD_REQUEST);
        res.json({msg:"Error!!!"});
    });
}

const promedio = (req,res) =>{
    _fanpage.findById({_id:req.params.id})
    .then((data) => {
            var prom = 0;
            for(i=0;i<data.calif.length;i++){
                prom = prom + data.calif[i];
            }
            prom = prom/data.calif.length;
            res.status(status.OK);
            res.json({FanPageTitle:data.title,promedio:prom});
        
    })
    .catch((err)=>{
        res.status(status.BAD_REQUEST);
        res.json({msg:"Error!!! en promedio"});
    });
}


module.exports = (fanpage) => {
    _fanpage = fanpage;
    return({
        createFanPg,
        findAll,
        comentarPG,
        promedio
    });
}
