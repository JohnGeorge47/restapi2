const express=require('express')
const router=express.Router();
const Hitman=require('../models/hitman')

router.get('/hitcat',function(req,res){

        res.send({type:'GET'});
});
router.post('/hitcat',function(req,res,next){
         Hitman.create(req.body).then(function(hitman){

                     res.send(hitman);




         }).catch(next);
});

router.put('/hitcat/:id',function(req,res){

        res.send({type:'PUT'});
})

router.delete('/hitcat/:id',function(req,res){

        res.send({type:'delete'});
})

module.exports=router;
