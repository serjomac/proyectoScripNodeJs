





$(document).ready(function(){
       
       var username
       
       var bandera = false
      
       $('#bot').click(function(e){

  
          var nu = $('#user').val() 
           
           var mensaje = 'Bienvenido ' + $('#user').val()
          
           
           var arrUssers = []

        $.ajax({
            url: "http://diagramaflujo-carlosnunez.c9users.io/usuario",
            type: "GET",
            contentType: 'application/json; charset=utf-8',
            success: function(resultData) {
                console.log('get exit')
                //here is your json.
                  // process it
                    console.log(resultData)
                    arrUssers = resultData
                    
                $.each(arrUssers, function(key, user){
                   

                   
                   if(user.nombreUsuario == nu){
                       
                       console.log('oki')
                       
                       bandera = true
                       $("<a>").attr("href", 'app.html')[0].click();
                    //   $('#bot').attr("href",'app.html').click();
                       
                       
                   } 
                   
                   
                })
                
                if(bandera== false){
                          alert('Credenciales incorrectas')
                    
                }
                
                
                
                    
            },
            error : function(jqXHR, textStatus, errorThrown) {
            },
            
            timeout: 120000,
                    
            
    
        }); 
           
           
           
           
           
           
          /*-----------------------------------------------------------------------*/
                
         /*       var datos = {    id: 2,
                                  nombre: $('#user').val(),
                                  nombreUsuario : nu,
                                  password: $('#pass').val()     
                                }    
           console.log(datos)
                
                $.ajax({
                type: "POST",
                url : 'https://diagramaflujo-carlosnunez.c9users.io/usuario',
                data : datos,                            
                 //en este caso
                dataType : 'json',
                success : function(data){
                       console.log(data)
                       console.log('1 added')
                       alert(mensaje)
                },              
                error: function(error){
                        console.log('error')
                }
        })   
        
        
        /*----------------------------------------*/
           
           
       }) 
        
        
    })