var express=require('express');
var app=express();
var bodyParser=require('body-parser');
var mongoose=require('mongoose');

Emp=require('./module/emp');
app.use(bodyParser.json());
mongoose.connect('mongodb://localhost/test',{ useNewUrlParser: true});
var db=mongoose.connection;

app.get('/',function(req,res){
  res.send("please use /emp  or /dept");
});

app.get('/emp',function(req,res){
    Emp.getEmps(function(err,emps){
      if(err){
        throw err;
      }
      res.json(emps);
    });
});



app.get('/emp/:_id',function(req,res){
    Emp.getEmpById(req.params._id,function(err,emp){
      if(err){
        throw err;
      }
      res.json(emp);
    });

});

app.post('/emp',function(req,res){
    var data=req.body;
    Emp.addEmp(data,function(err,emplyee){
      if(err){
        throw err;
      }
      res.json(emplyee);
    });
});

app.put('/emp/:_id',function(req,res){
    var id=req.params._id;
    var data=req.body;
    Emp.updateEmp(id,data,{},function(err,emp){
      if(err){
        throw err;
      }
      res.json(emp);
    });
});


app.delete('/emp/:_id',function(req,res){
    var id=req.params._id;
    Emp.deleteEmp(id,function(err,emp){
      if(err){
        throw err;
      }
      res.json(emp);
    });
});

app.listen(3000);
console.log('Running on port 3000');
