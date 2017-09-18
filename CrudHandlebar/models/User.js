var db=require('../dbconnection');

var Donuts={

getAllUser:function(callback){

return db.query("Select * from usuario",callback);

},
    
addUser:function(User,callback){
   console.log("inside service");
   console.log(User.Id);
return db.query("Insert into usuario values(?,?,?,?)",[User.id,User.nombre,User.nombreUsuario,User.password],callback);
//},
//deleteDonuts:function(id,callback){
//    return db.query("delete from donuts where Id=?",[id],callback);
//}
},
    
//getDonutById:function(id,callback){
//
//    return db.query("select * from diagrama where id=?",[id],callback);
//},
//addDonuts:function(Donuts,callback){
   //console.log("inside service");
   //console.log(Diagrama.Id);id, tipo, nombre, ppu, batters.
//return db.query("Insert into diagrama values(?,?,?,?,?)",[Donuts.id,Donuts.tipo,Donuts.nombre,Donuts.ppu,Donuts.batters],callback);
//},
    
deleteUser:function(id,callback){
    return db.query("delete from usuario where Id=?",[id],callback);
},
    
editUser:function(id,callback){
    return db.query("select * from usuario where Id=?",[id],callback);
    
    
},
    
    
editarUser:function(id, user, callback){
    return db.query("UPDATE usuario SET nombre=?, nombreUsuario=?, password=? WHERE Id=?" , [user.nombre, user.nombreUsuario, user.password, id], callback);
}
    
    
    
};
module.exports=Donuts;


