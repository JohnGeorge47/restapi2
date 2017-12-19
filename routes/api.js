const express=require('express')
const router=express.Router();

router.get('/hitcat',function(req,res){

        res.send({type:'GET'});
});
router.post('/hitcat',function(req,res){
        console.log(req.body);
        res.send({
            type:'POST',
            name:req.body.name,
            rank:req.body.rank

                    });
});

router.put('/hitcat/:id',function(req,res){

        res.send({type:'PUT'});
})

router.delete('/hitcat/:id',function(req,res){

        res.send({type:'delete'});
})

module.exports=router;
