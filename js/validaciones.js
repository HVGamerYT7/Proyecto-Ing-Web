document.addEventListener("DOMContentLoaded",function(){
    document.getElementById("formulario").addEventListener("submit",function(evento){     
         let email=document.getElementById("email").value;
         let rut=document.getElementById("rut").value;
         let contra=document.getElementById("contra").value;
         let recontra=document.getElementById("recontra").value;
         const coleccion=document.getElementById("formulario").getElementsByTagName("li");
         evento.preventDefault();
         if(email==""){
             coleccion[0].querySelector("span").innerHTML="Debe ingresar un correo electronico";
         }
         if(rut==""){
              coleccion[1].querySelector("span").innerHTML="Debe ingresar un rut";
         }else{
              if(validar(rut)){
                coleccion[1].querySelector("span").innerHTML="";
              }else{
                coleccion[1].querySelector("span").innerHTML="Rut inválido";
              }
         }
         if(contra==""){
          coleccion[4].querySelector("span").innerHTML="Debe ingresar una contraseña";
         }
         else{
          if(contra!=recontra){
          coleccion[5].querySelector("span").innerHTML="Ambas contraseñas deben coincidir";
          }
        }
    }); 
    
    function validar(rut){
        var suma=0; 
        var arrRut = rut.split("-"); 
        var rutSolo = arrRut[0]; 
        var verif = arrRut[1]; 
        var continuar = true; 
        for(i=2;continuar;i++){ 
          suma += (rutSolo%10)*i; 
          rutSolo = parseInt((rutSolo /10)); 
          i=(i==7)?1:i; 
          continuar = (rutSolo == 0)?false:true; 
        }
         resto = suma%11; dv = 11-resto; 
         if(dv==10){  
            if(verif.toUpperCase() == 'K') return true;
         }else if (dv == 11 && verif == 0)
          return true; 
          else if (dv == verif) return true; 
          else return false;
          return false;
      
  }

  var regiones = [];
  $.getJSON('./assets/comunas-regiones.json', function (datos) {
    regiones = datos;
    $("#region").append('<option>--Seleccione región--</option>');
    regiones.regiones.forEach(elemento => {
      $("#region").append(`<option>${elemento.region}</option>`);
    });
  });
  $("#region").on("change", function (a) {
    $('#comuna').find('option').remove().end();
    var region = $(this).children("option:selected").val();
    console.log(region);
    if (region !== "Seleccione una región") {
      regiones.regiones.forEach(elemento => {
        if (elemento.region == region) {
          $("#comuna").append('<option>--Seleccione comuna--</option>');
          elemento.comunas.forEach(comuna => {
            $("#comuna").append(`<option>${comuna}</option>`);
          });
        }
      })
    }
  });

  function btn(){
    let terms=document.getElementById("terms").checked;
    if(!terms){
      document.getElementById("btnRegister").disabled = true;
      document.getElementById("btnGoogleRegister").disabled = true;
    }
    else{
      document.getElementById("btnRegister").disabled = false;
      document.getElementById("btnGoogleRegister").disabled = false;
    }
  }
  document.getElementById("terms").addEventListener("change",btn);

});