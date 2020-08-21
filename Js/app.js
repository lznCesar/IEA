/*Codigo creado por Cesar Lozano Rincon*/

// declaración de variables
let nombre, apellidoPaterno, apellidoMaterno, curp;

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

    console.log(nombre, apellidoPaterno, apellidoMaterno, curp);


  // validaciones de los formularios
   if(nombre === "" || apellidoPaterno === '' 
   || apellidoMaterno === '' || curp === ''){
        alert(
            'los campos no  estan completos, identifique su contenido')
   }else{
        alert('se ha llenado los campos satisfactoriamente');
        btnGuardar.disabled = true;
        btnGenerarXml.style.backgroundColor = 'green'
        btnGenerarXml.disabled = false;

   }   
      return nombre, apellidoPaterno, apellidoMaterno, curp;
});



//funcion para generar archivo Xml
/* 
btnXml.addEventListener('click', crearDocXml())
function crearDocXml(){
console.log('entro a funcion crear xml');
}  */






