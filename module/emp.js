var mongoose=require('mongoose');
var empSchema=mongoose.Schema({
          name:String,
          age:Number,
          city:String,
});

var Emp=module.exports=mongoose.model('emp',empSchema,'emp');
module.exports.getEmps=function(callback,limit){
Emp.find(callback).limit(limit);
};
module.exports.getEmpById=function(id,callback){
Emp.findById(id,callback);
};
module.exports.addEmp=function(emp,callback){
    Emp.create(emp,callback);
};

module.exports.updateEmp=function(id,emp,options,callback){
    var query={_id:id};
    var update={
      name:emp.name,
      age:emp.age,
      city:emp.city
    }
  Emp.findOneAndUpdate(query,update,options,callback);
};
module.exports.deleteEmp=function(id,callback){
      var query={_id:id};
    Emp.remove(query,callback);
};
