var express     = require('express'), 
    app         = express(),
    port        = process.env.PORT,
    bodyParser  = require('body-parser');

var todoRoutes = require('./routes/todos');


// I think we need to add a require statment here for the models     

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
   

app.get("/", function(req,res){
    res.send("HELLO FROM THE INDEX ROUTE");
})

app.use('/api/todos', todoRoutes);

app.listen(port, function(){
    console.log("APP IS RUNNING ON " + process.env.PORT);
    console.log("module.path = " + module.paths)
});