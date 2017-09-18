var db=require('../dbconnection');

var Figura={

getAllFiguras:function(callback){

return db.query("Select * from figura",callback);

},
getFiguraById:function(id,callback){

    return db.query("select * from figura where Id=?",[id],callback);
},
addFigura:function(Figura,callback){
   console.log("inside service");
    
return db.query("Insert into figura values(?,?,?,?,?,?,?,?,?)",[Figura.id,Figura.nombre,Figura.texto,Figura.posicionX, Figura.posicionY,Figura.color,Figura.flujo_id,Figura.size, Figura.rotacion ],callback);

},
deleteFigura:function(id,callback){
    return db.query("delete from figura where Id=?",[id],callback);
},
updateFigura:function(id,Figura,callback){
    return  db.query("update figura set nombre=?,texto=?,posicionX=?, posicionY=?,color=?,flujo_id=?,size=?, rotacion=?  where Id=?",[Figura.nombre,Figura.texto,Figura.posicionX, Figura.posicionY,Figura.color,Figura.flujo_id,Figura.size, Figura.rotacion,id],callback);
},
deleteAll:function(item,callback){

var delarr=[];
   for(i=0;i<item.length;i++){
       delarr[i]=item[i].Id;
   }
   return db.query("delete from figura where Id in (?)",[delarr],callback);
}
};
module.exports=Figura;
