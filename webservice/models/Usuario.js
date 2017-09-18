var db=require('../dbconnection');

var Usuario={

getAllUsuarios:function(callback){

return db.query("Select * from usuario",callback);

},
getUsuarioById:function(id,callback){

    return db.query("select * from usuario where Id=?",[id],callback);
},
    
    
addUsuario:function(Usuario,callback){
   console.log("inside service");
return db.query("insert into usuario values(?,?,?,?,?)",[Usuario.id,Usuario.nombre,Usuario.nombreUsuario, Usuario.password, Usuario.numeroflujos ],callback);

},
    
    
deleteUsuario:function(id,callback){
    return db.query("delete from usuario where Id=?",[id],callback);
},
updateUsuario:function(id,Usuario,callback){
    return  db.query("update usuario set nombre=?,nombreUsuario=?,password=?, numeroflujos=? where Id=?",[Usuario.nombre,Usuario.nombreUsuario, Usuario.password,Usuario.numeroflujos,id],callback);
},
deleteAll:function(item,callback){

var delarr=[];
   for(i=0;i<item.length;i++){
       delarr[i]=item[i].Id;
   }
   return db.query("delete from usuario where Id in (?)",[delarr],callback);
}
};
module.exports=Usuario;
