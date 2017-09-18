var arregloFlujo = []  
var arregloUsersBd = []    

var nombreUser = "Diagrama"

//cargamos los flujos
$.ajax({
            url: "http://diagramaflujo-carlosnunez.c9users.io/flujo",
            type: "GET",
            contentType: 'application/json; charset=utf-8',
            success: function(resultData) {
                //here is your json.
                  // process it
                    console.log(resultData)
                    arregloFlujo = resultData
                    
                $.each(arregloFlujo, function(key, flujo){
                    $("#selecFlujo").append("<option id=" + flujo.id+ ">" + "verison"+ flujo.id + "</option>")
                })
                    
            },
            error : function(jqXHR, textStatus, errorThrown) {
            },
            
            timeout: 120000,
                    
            
    
        }); 

$.ajax({
            url: "http://diagramaflujo-carlosnunez.c9users.io/usuario",
            type: "GET",
            contentType: 'application/json; charset=utf-8',
            success: function(userData) {
                //here is your json.
                  // process it
                    console.log(userData)
                    arregloUsersBd = userData
                    
                     nombreUser = arregloUsersBd[0].nombre
                    console.log(nombreUser)
                        $('#userName').html("Autor: " + nombreUser) 
                    
                    
            },
            error : function(jqXHR, textStatus, errorThrown) {
            },
            
            timeout: 200000,
                    
            
    
        }); 
        



    
        id=0;
        
        var arrJson =  [];
        var arrFigurasTmp = [];
        var flujoContador = 0;
        var flujoAcual = 1;
        var arrFiguras = []
        var arrLetras = []
        
        var temoporal = $(this)
        var pos = 0;
        var contador= 0;
                           
        class Flujo{        
            constructor(id, version, arrDiagramas, usuario){
            this.id = id;
            this.version = version;
            this.arrDiagramas = arrDiagramas;
            this.usuario = usuario;
                    
        }           
        
        
    }   
        
        
    class Figura{
	constructor( id,imagenFondo, texto, posicionX, posicionY, bgColor, idFlufo, size, rotacion
	){
        this.id = id;
    	this.imagenFondo= imagenFondo;
    	this.texto = texto;
    	this.posicionX = posicionX;
    	this.posicionY = posicionY;
        this.bgColor = bgColor;
        this.idFlufo = idFlufo;
        this.size = size;
        this.rotacion = rotacion;
	}   
	   
}   
        
  /*funcion login */

 class Usuario{
	constructor(id, name, username, password){
    
    this.id = id;   
    this.name = name;
	this.username= username;
	this.password = password;
	
    
	}
	
	
	
}



  /*hasta aqui*/
        
    var arrObjetos = []
    var flujoSeleccionado;
    
    $(document).ready(function(){
        
   

      
       
       /* $().load(function(){
        arregloFlujo.forEach(function(flujo){
            
            console.log(flujo)
            
            $("#selecFlujo").append("<option id=" + flujo.id+ ">" + flujo.version + "</option>")
            
            
        })
        })*/
        
        
        $('#selecFlujo').change(function(){
            
            
                /* SERVICIO GET - REST */
            
                   flujoSeleccionado = $("#selecFlujo")[0].selectedIndex
                   flujoAcual = flujoSeleccionado +1
                     
                    $("#frame").empty();
                    
                    $.getJSON( "http://diagramaflujo-carlosnunez.c9users.io/figura", function( data ) {
                        console.log("aqui empieza a cargarlos datos")
                        
                        var items = [];
                        
                        arrFiguras = data
                        console.log("El tama;o de la ultima figura es: "+arrFiguras[10].size)
                   //     console.log("el id Flujo es: " + arrFiguras[0].flujo_id)
                        //console.log("el tamano del arreglo de objetos es: " +arrFiguras.length)
                        /*$.each( data, function( key, figura ) {
                        
                            if(figura.flujo_id == flujoAcual ){
                                console.log("fig "+figura.posicionX)*/
                                
                //                pintarFigura(figura)
                    
                    
                        //Funcion de cargar los datos al combo
                            
                            arrFiguras.forEach(function(figura){
                            //console.log("el id es: " + figura.flujo_id + " y el flujo actural es: " + flujoAcual)
                            if (figura.flujo_id == flujoAcual) {
                            console.log("eltama;o de figuras es: " + arrFiguras.length)
                            
                            var elementoCargado = $('<div id='+ figura.id +'></div>');
                            elementoCargado.addClass("ui-draggable")
                            elementoCargado.addClass(figura.nombre)
                                
                            elementoCargado.append('<input  type="text" name="" placeholder="" value='+ figura.texto +'>')
                            var indice = parseInt(figura.id.substr(-1))
                            console.log("el indice de div tiene"+ indice)
                            elementoCargado.append('<a id="del'+indice+'"' +'class="delete" href="#">x</a>')
                            //elementoCargado.css({"left":figura.posicionX,"top":figura.posicionY, "transform": figura.rotacion, "height": figura.size});
                
                        elementoCargado.css("left",figura.posicionX)
                        elementoCargado.css("top",figura.posicionY)
                        elementoCargado.css("transform", figura.rotacion) 
                        elementoCargado.css("height", figura.size)
                
                
                
                
                            console.log(elementoCargado.css("background-color",figura.color))
                            elementoCargado.css("background-color",figura.color)
                            $("#frame").append(elementoCargado)
                            console.log("el arr de figuras tiene" + arrFiguras.length)        
                            $(elementoCargado).draggable({
                            containment: 'parent',
                            stop:function(ev, ui) {
                                var pos=$(ui.helper).offset();
                                console.log($(this).attr("id"));
                                console.log(pos.left)
                                console.log(pos.top)
                                           
                    }
                });
                                $(".delete").click(function() {
                                
                                console.log("Se esta elimiando espere....")
                                
                       
                               var miId = $(this).attr("id");
                               
                               var indice2 = parseInt(miId.substr(-1)) 
                               //console.log("el inidce2 es : "+ indice2)
                               //console.log("el parse de mid es: " + miId.substr(3,miId.length))
                               var cloneId =  "clonediv"+indice2
                               //console.log("clone id: " +cloneId)    
                               $("#"+cloneId).remove();       
                                
                                jQuery.ajax({
                                url: 'http://diagramaflujo-carlosnunez.c9users.io/figura/' + cloneId,
                                type: 'DELETE',
                                success: function(data) {
                                    console.log(data)
                                    
                                    }
                                });
                            
                    //Eliminar del arreglo de objetos
                          	/*arrFiguras.forEach(function(figura) {
                          	   
                          	  //comparando los ids 
                          	  if(figura.id==""+cloneId){
                          	      
                          	      
                                    
                                  if (indice2 > -1) {
                                      //splice recibe la posicion en el arreglo y el numero de elementos a eliminar
                                    arrFiguras.splice(indice2-1, 1);
                                    console.log("Se elimino y ahora el arr tiene: " + arrFiguras.length)
                                    console.log(arrFiguras[0].posicionX + arrFiguras[0].nombre)
                                    }
                          	      
                          	  }  
                             
                          	    
                          	})*/
                          	
       //                   	console.log(arrObjetos.length)
                                
                   
                            
                        })
                                
                        }
                        })
                        
                        
                        
                    
                })
            
            
        
                    
             
               // });
 
  
        });
            
            
            
            
        /*-----------------    */
            
            
           
    /*        $("#frame").empty();
             flujoSeleccionado = $("#selecFlujo")[0].selectedIndex
             flujoAcual = flujoSeleccionado +1
             console.log(flujoAcual)
             
             
             var elementosGuardados = localStorage.getItem("Figuras")
             arrFiguras = JSON.parse(elementosGuardados)
             
             
			 //console.log(localStorage.getItem("Figuras"))
			 
			 
			 arrFiguras.forEach(function(figura){
			     if (figura.idFlufo == flujoAcual) {
			                             //???           
    			    var elementoCargado = $('<div id='+ figura.id +'></div>');
    			 	elementoCargado.addClass("ui-draggable")
    			 	elementoCargado.addClass(figura.imagenFondo)
    			 	elementoCargado.append('<input  type="text" name="" placeholder="" value='+ figura.texto +'>')
    			 	elementoCargado.css({"left":figura.posicionX,"top":figura.posicionY, "transform": figura.rotacion, "height": figura.size});
    			 	console.log(elementoCargado.css("background-color",figura.bgColor))
    			 	elementoCargado.css("background-color",figura.bgColor)
    			 	$("#frame").append(elementoCargado)
    			 	
    			 	$(objName).draggable({
                	containment: 'parent',
                    stop:function(ev, ui) {
                    	var pos=$(ui.helper).offset();
                    	console.log($(this).attr("id"));
						console.log(pos.left)
                        console.log(pos.top)
                        
                        
                   
                    }
                });
			     }
			 	
			 	
			 })
			 //cargamos las figuras*/
             
             
             
       
        
        
        
        var usuario = new Usuario(1,"Jonathan", "user1", "1234")
        var admin = new Usuario(2,"Admin", "Admin", "1234")
        
        var arrUsuarios =  [];
            
            
        $("#exportar").click(function(e){
           arrUsuarios.push(usuario)
           arrUsuarios.push(admin)
           arrJson.push(arrObjetos)
           arrJson.push(arrUsuarios)
            
        $("#exportar").attr( "download", "proyecto.json" );
        //Lo envía como un href para que lo descargue
        this.href = 'data:plain/text,' + JSON.stringify(arrJson);
                
        
        });
        
        
         
        

     //COLORES           
        $("#pink").click(function(){
            
            	$(".color").css("background-color","pink");
            	 
        })
        
         $("#blue").click(function(){
            
            	$(".color").css("background-color","#00bfff");
            	
        })
         
           $("#white").click(function(){
            
            	$(".color").css("background-color","white");
            	
        })
         
           $("#yellow").click(function(){
            
            	$(".color").css("background-color","#ffffe0");
            	
        })
         
         
         
         $('#crearFlujo').click(function() {
            var contadorId=0;
            $('#selecFlujo').empty()
            flujoContador ++
            console.log("el arreglo de flujo tiene: "+arregloFlujo.length)
            var flujoTmp = new Flujo(arregloFlujo.length+1, "Version"+arregloFlujo.length+1 ,arrFiguras, usuario)
            arregloFlujo.push(flujoTmp)
            
            arregloFlujo.forEach(function(flujo){
            contadorId++
            console.log(flujo)
            
            $("#selecFlujo").append("<option id="+contadorId+">" + "version" +flujo.id + "</option>")
            
            
        })
            
         })
                                   
        $("#save").click(function(){
            
            arregloFlujo.forEach(function(flujo){
                
                
                var datoFlujo = { id: flujo.id,
                                  numerofiguras : 3,
                                  usuario_id : 1
                                
                                }    
             $.ajax({
                type: "POST",
                url : 'http://diagramaflujo-carlosnunez.c9users.io/flujo',
                data : datoFlujo,                            
                 //en este caso
                dataType : 'json',
                success : function(data){
                       console.log(data)
                },              
                error: function(error){
                        console.log('error')
                }
        });   
                
                
                
            })
            
            
            /*Actualiza las propiedades de las figuras*/		     
			arrObjetos.forEach(function(figura) {
			    contador ++;
			    idDiv = figura.id
			    var tam = $("#"+idDiv).height()
			    console.log("el nuevotamano es"+ tam)
			   console.log(figura.id + pos.left)
			   console.log(figura.id + pos.top)
			   console.log(figura.idFlufo)
			   figura.size = tam
			   
			   
			  
			    var  gRotacion =  $("#"+idDiv).css("transform")
		        figura.rotacion = gRotacion
                
                console.log("FIG" + figura.id)
                console.log("rot" + gRotacion)
		        console.log("tam" + figura.size)
                
                
                
                
                        var data = { id : figura.id,
                            nombre : figura.imagenFondo,
                            texto : figura.texto,
                            posicionX : figura.posicionX,
                            posicionY : figura.posicionY,
                            color : figura.bgColor,
                            flujo_id : figura.idFlufo,
                            size : figura.size,
                            rotacion : figura.rotacion                         
                          
                         };   
            
            /*var datoss = { id : 'asd',
                            nombre : 'nicole',
                            nombreUsuario : 'niky',
                            password : '123',
                            numeroflujos : 1
                          
                         }*/
                        
                
              $.ajax({
                type: "POST",
                url : 'http://diagramaflujo-carlosnunez.c9users.io/figura',
                data : data,                            
                 //en este caso
                dataType : 'json',
                success : function(data){
                       console.log(data)
                },          
                error: function(error){
                        console.log('error')
                }
        });
            
        /*-------------------------------------------*/    
            
			     
	       
            
            console.log("se guardo con exito")
                
		      
      	        
			})     
		/*-------------------------------------------*/	
			
			
			                       
			localStorage.removeItem("Figuras")
            var figuras = JSON.stringify(arrObjetos)
            localStorage.setItem("Figuras", figuras)
            
            
            console.log("el localstorage tiene: " +localStorage.getItem('Figuras'))
            
//        var txtFile = "test.txt";
//        var file = new File(txtFile,"write");
            
            
            /*POST-AJAX*/

            arrObjetos =[];          
           
    })
    
        
        
        
               
        $('#limpiar').click(function() {
            $("#frame").empty();
      
      /*
      //ELIMINANDO DIVS
          for (var i=0; i<10; i++) {
          itemFrame = "clonediv" + i
                $('#' + itemFrame).remove();
            }
        //LIMPIANDO CANVAS
        contexCanvas.clearRect(0, 0, $('#c')[0].width, $('#c')[0].height); 
       
       */
       
       
        })
        
        //Counter
        counter = 0;
        //Make element draggable
        $(".drag").draggable({
            helper:'clone',
            containment:'frame',
            
            //When first dragged
            stop:function(ev, ui) {
               
            	pos=$(ui.helper).offset();
            	objName = "#clonediv"+counter
            	$(objName).css({"left":pos.left,"top":pos.top});
            	$(objName).removeClass("drag");
            	
            	
        
               	//When an existiung object is dragged
                $(objName).draggable({
                	containment: 'parent',
                    stop:function(ev, ui) {
                        
                        
                    	pos=$(ui.helper).offset();
                    	//console.log($(this).attr("id"));
                        
                        //console.log(arrObjetos[0])
                        
                                                     
						console.log(pos.left)
                        console.log(pos.top)
                        var cadena = $(this).attr("id");
                        for (var i=0; i < arrObjetos.length ; i++){
                            
                            var indice = parseInt(cadena.substr(-1))
                            console.log(indice)
                            arrObjetos[indice-1].posicionX = pos.left
                            arrObjetos[indice-1].posicionY = pos.top
                            console.log("nuevas posiciones , " + arrObjetos[i].posicionX + "....."+ arrObjetos[i].posicionY)
                        }
                        
//                        arrObjetos.forEach(function(figura) {                            
//                            if(figura.id == "clonediv"+$(this).attr("id"))
//                                console.log(figura.id)
//                                figura.posicionX = pos.left
//                                figura.posicionY = pos.top
//                                console.log("nuevas posiciones , " + figura.posicionX + "....."+ figura.posicionY)
//                        })
                        
                        
                    }
                });
            }
        });
        
        
        
        
        
        
        
        
        
        
        //Make element droppable
        $("#frame").droppable({
			drop: function(ev, ui) {
				
				if (ui.helper.attr('id').search(/drag[0-9]/) != -1){
					counter++;  
					var element=$(ui.draggable).clone();
					element.find('input').change(function(){
						
						var input = $(this)
						//figuras[0].text = '';
						arrObjetos.forEach(function(figura) {
							
							if(figura.id==input.parent().attr('id')){
								
								figura.texto = input.val()
								console.log(figura)
							}
						    
						    	//console.log("encontrado")
						})
						
						
						
					})  
					element.addClass("tempclass");
					$(this).append(element);
					//$(".tempclass").attr("id","clonediv"+counter);
					element.attr("id","clonediv"+counter);
					$("#clonediv"+counter).removeClass("tempclass");
					 $("#clonediv"+counter).append('<a id="del'+counter+'"' +'class="delete" href="#">x</a>')
			
                    
                    
                    
                    
                          
                    /*PREGUNTANDO SI ES FLECHA*/
                    
                 if( $("#clonediv"+counter).hasClass("flecha")){
                     
                
                        $("#clonediv"+counter).append('<a id="bRotate'+counter+'"'+' class="botonRotar" href="#">&#x21ba</a>')
                        $("#clonediv"+counter).append('<div class="ui-resizable-handle ui-resizable-s"></div>')
                     
                            $("#clonediv"+counter).addClass("resizable");
                            
                
                           
            
                 
                        
                 }                    
                    /*--------------------------------------*/
                 
                               
                                
					//Get the dynamically item id 
					draggedNumber = ui.helper.attr('id').search(/drag([0-9])/)
					
					itemDragged = "dragged" + RegExp.$1
					
					
					
					$("#clonediv"+counter).addClass(itemDragged);
					 
                    $("#clonediv"+counter).removeClass("color");
					
					var bgColor = $("#clonediv"+counter).css("background-color");
                    
                    pos=$(ui.helper).offset();
                    var figTmp = new Figura("clonediv"+counter,itemDragged,"", pos.left, pos.top, bgColor, flujoAcual, "", "")
                    console.log("se añadio")
                    arrObjetos.push(figTmp);
                    id++;
                    console.log(arrObjetos)
                    
                    
                    
  
              
                    
                 /*MODIFICAR EL TAMAÑO*/       
                    
                 $('.resizable').resizable({
                     handles: {

                         's': '.ui-resizable-handle'
                        
                     }
              
                    });
                /*------------------------------------*/
                            $('.resizable').change(function(){
                 console.log("cambio")
                     altura =  $("#clonediv"+counter).height();
                     console.log(altura)
                     });
                
               
                
                
                
                  
                     
                    
                    /*rotacion*/
                        var nId
                        var rotation = 0
                        
                        
                        jQuery.fn.rotate = function(degrees, nId) {
                     
                            $("#clonediv"+nId).css({
                            
                            '-webkit-transform' : 'rotate('+ degrees +'deg)',
                            '-moz-transform' : 'rotate('+ degrees +'deg)',
                            '-ms-transform' : 'rotate('+ degrees +'deg)',
                            'transform' : 'rotate('+ degrees +'deg)'});
                            
                           
                       //    figura.gRotacion =  $("#clonediv"+nId).
                           
                    };
        
                   
                    $(".botonRotar").click(function() {
                        
                        hijo = $(this).attr("id");
                        nId =  hijo.substr(7,hijo.length)
                        
                       
                        
                        rotation += 30
                        $("#clonediv"+nId).rotate(rotation, nId)
                           
                    });
                    
                    /*--------------------*/
                
                //Eliminar elementos visualmente    
                            $(".delete").click(function() {
                                
                                console.log("dele")
                            
                       
                       var miId = $(this).attr("id");
                        cloneId =  "clonediv"+miId.substr(3,miId.length)  
                         console.log("clone id: " +cloneId)    
                            $("#"+cloneId).remove();       
                            
                            
                            
                    //Eliminar del arreglo de objetos
                          	arrObjetos.forEach(function(figura) {
                          	   
                          	  //comparando los ids 
                          	  if(figura.id==""+cloneId){
                          	      
                          	      index = arrObjetos.indexOf(figura)
                               
                                  if (index > -1) {
                                      //splice recibe la posicion en el arreglo y el numero de elementos a eliminar
                                    arrObjetos.splice(index, 1);
                                    console.log("Se elimino (" + arrObjetos.length)
                                   
                                    }
                          	      
                          	  }  
                             
                          	    
                          	})
                          	
       //                   	console.log(arrObjetos.length)
                                
                   
                            
                        })
                        
                /*--------------------------------------*/        
                    
				}
        	}
        	
        	
        	
        	 
        	
           
        	
        	
        });
        
       
        
    });

    
    
     