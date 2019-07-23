//CATEGORIAS

var mongoose = require("mongoose");


let fanPgSchema = new mongoose.Schema({
    title: {
        required: true,
        type: String
    },
    description:{
        type: String
    },
    coments:[
        {
            type:String
        }
    ],
    keywords:[
        {
            type:String
        }
    ],
    calif:[
        {
            type:Number
        }
    ]   
});

const fanPgModel = mongoose.model('FanPage', fanPgSchema, 'fanpages');

module.exports = fanPgModel;