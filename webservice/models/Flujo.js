var db=require('../dbconnection');

var Flujo={

getAllFlujos:function(callback){

return db.query("Select * from flujo",callback);

},
getFlujoById:function(id,callback){

    return db.query("select * from flujo where Id=?",[id],callback);
},
addFlujo:function(Flujo,callback){
   console.log("inside service");
return db.query("Insert into flujo values(?,?,?)",[Flujo.id, Flujo.numerofiguras,Flujo.usuario_id ],callback);

},
deleteFlujo:function(id,callback){
    return db.query("delete from flujo where Id=?",[id],callback);
},
updateFlujo:function(id,Flujo,callback){
    return  db.query("update flujo set numerofiguras=?,usuario_id=? where Id=?",[Flujo.numerofiguras,Flujo.usuario_id,id],callback);
},
deleteAll:function(item,callback){

var delarr=[];
   for(i=0;i<item.length;i++){
       delarr[i]=item[i].Id;
   }
   return db.query("delete from flujo where Id in (?)",[delarr],callback);
}
};
module.exports=Flujo;
