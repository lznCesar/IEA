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

    // transformamos todas las variables en mayúsculas
    nombre          = nombre.toUpperCase();
    apellidoPaterno = apellidoPaterno.toUpperCase();
    apellidoMaterno = apellidoMaterno.toUpperCase();
    curp            = curp.toUpperCase();


    // division de los datos para validacion en curp
      let letraUno    = apellidoPaterno.substring(0,1);
      let letraDos    = apellidoPaterno.substring(1,2);
      let letraTres   = apellidoMaterno.substring(0,1);
      let letraCuatro = nombre.substring(0,1)
    
     validarNombre(nombre);
     valPrimerApellido(apellidoPaterno);
     valSegundoApellido(apellidoMaterno);
     valCURP(curp,letraUno, letraDos, letraTres, letraCuatro);


  /*    limpiar(); */
     
});




// función para validar inputs nombre
function validarNombre(nombre){
     if(nombre === ''){
          alert('El campo nombre no contiene información')
     }else{
         console.log(nombre);
          return true
     };
}


// función para validar inputs primer apellido
function valPrimerApellido(apellido){
     if(apellido === ''){
          alert('El campo primer apellido no contiene información')
     }else{
          console.log(apellido);
          return true
      }
}

// función para validar input segundo apellido.

function valSegundoApellido(apellido){
     if(apellido === ''){
          alert('El campo segundo apellido no contiene información')
     }else{
          console.log(apellido);
          return true
     }
}


// funcion para validar CURP

function valCURP (curp, letraUno, letraDos, letraTres, letraCuatro){
     let posUno    = curp.substring(0,1);
     let posDos    = curp.substring(1,2);
     let posTres   = curp.substring(2,3);
     let posCuatro = curp.substring(3,4);

     if(posUno === letraUno && posDos === letraDos && posTres === letraTres && posCuatro === letraCuatro){
          console.warn('entro a validacion');
     }else{
          console.log('no esta validado');
     }
}



const limpiar = ()=>  {
     document.getElementById("Form").reset();
   }





/* 
if(validarNombre() == true && valPrimerApellido() == true 
    && valSegundoApellido() == true){
     btnGuardar.disabled = true;
     btnGenerarXml.style.backgroundColor = 'green'
     btnGenerarXml.disabled = false;
    }else{
         console.log('NO ESTAN COMPLETOS');
         
    }
}

 */





