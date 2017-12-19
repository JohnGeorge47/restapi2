const mongoose= require('mongoose');
const Schema= mongoose.Schema;
const HitmanSchema=new Schema({

        name:{
                type:String,
                required:[true,'Name field is required']
             },
        rank:{

            type:String
        },
        availability:{
            type:Boolean,
            default:false
        }



});
const Hitman=mongoose.model('hitman',HitmanSchema);
module.exports=Hitman;
