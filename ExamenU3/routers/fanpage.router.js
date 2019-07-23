const router = require('express').Router();

module.exports = (wagner) => {
    
    const fanpg = wagner.invoke((Fanpage) => 
        require('../controllers/fanpage.controller')(Fanpage));
/* 
    router.post('/', (req, res) =>
        brandCtrl.createBrand(req, res));

    router.get('/', (req, res) =>
        brandCtrl.findAll(req, res));

    router.delete('/:id', (req, res) =>
        brandCtrl.deleteById(req, res));
        
    router.put('/:id', (req, res) =>
        brandCtrl.findAndUpdate(req, res));

        router.get('/:id', (req, res) =>
        brandCtrl.findByOne(req, res)); */

    router.post('/', (req, res) =>
        fanpg.createFanPg(req, res));

    router.get('/:id', (req, res) =>
        fanpg.findAll(req, res));

    router.put('/:id',(req,res) =>
        fanpg.comentarPG(req,res));
     
    router.get('/:id/promedio',(req,res) =>
        fanpg.promedio(req,res));
        


    return router;
}