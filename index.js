const express= require('express');

const app= express();


app.get('/',function(req,res){

        console.log('GET request');
        res.end();


});

app.listen(process.env.port || 3000,function(){


        console.log('Express running on port ' );


});
