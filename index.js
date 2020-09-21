var express     = require('express'), 
    app         = express(),
    port        = process.env.PORT;
    
app.get("/", function(req,res){
    res.send("Hi there from express");
})

app.listen(port, function(){
    console.log("APP IS RUNNING ON " + process.env.PORT);
});