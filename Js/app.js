/*Codigo creado por Cesar Lozano Rincon*/

// declaración de variables
let nombre, apellidoPaterno, apellidoMaterno, curp, valorR;

// Referencias al Html
const btnGuardar = document.querySelector("#guardar"),
      btnGenerarXml = document.querySelector("#generar");
      btnGenerarXml.disabled = true;
     

/* función para guardar la información
 que se agregaron al formulario */

btnGuardar.addEventListener("click", () => {
    nombre          = document.querySelector("#nombre").value;
    apellidoPaterno = document.querySelector("#primerApellido").value;
    apellidoMaterno = document.querySelector("#segundoApellido").value;
    curp            = document.querySelector("#curp").value;


      let paternoCurp = apellidoPaterno.substring(0,2)
      console.log(paternoCurp);
      
    
     validarNombre(nombre);
     valPrimerApellido(apellidoPaterno);
     valSegundoApellido(apellidoMaterno);
     
     //  let string = curp.toString()
     //  let longitud = string.lenght
     //  console.log(longitud);
      
// VALIDACION DEL INPUT CURP 
     if(curp === ''){
          alert('El campo CURP no contiene información')
     }else if(curp.lenght < 2){
          alert('es menor a 2')
          
     }else{
          // curp = curp.toUpperCase();
          // console.log(curp);
          // return true
          console.log('paso la validacion');
          
     }
});


function validarNombre(nombre){
     if(nombre === ''){
          alert('El campo nombre no contiene información')
     }else{
          nombre = nombre.toUpperCase() 
          return true
     };
}

function valPrimerApellido(apellido){
     if(apellido === ''){
          alert('El campo primer apellido no contiene información')
     }else{
          apellido = apellido.toUpperCase()
          return true
     }
}


function valSegundoApellido(apellido){
     if(apellido === ''){
          alert('El campo segundo apellido no contiene información')
     }else{
          apellido = apellido.toUpperCase()
          return true
     }
}

if(validarNombre() == true && valPrimerApellido() == true 
    && valSegundoApellido() == true){
     btnGuardar.disabled = true;
     btnGenerarXml.style.backgroundColor = 'green'
     btnGenerarXml.disabled = false;
    }else{
         console.log('NO ESTAN COMPLETOS');
         
    }











