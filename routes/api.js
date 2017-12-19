const express=require('express')
const router=express.Router();

router.get('/hitcat',function(req,res){

        res.send({type:'GET'});
});
router.post('/hitcat',function(req,res){

        res.send({type:'POST'});
});

router.put('/hitcat/:id',function(req,res){

        res.send({type:'PUT'});
})

router.delete('/hitcat/:id',function(req,res){

        res.send({type:'delete'});
})

module.exports=router;
