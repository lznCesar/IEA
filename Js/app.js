// declaración de variables
let nombre, apellidoPaterno, apellidoMaterno, curp;

// Referencias al Html
const btnGuardar = document.querySelector('#guardar');
 

/* función para guardar la información
 que se agregaron al formulario */
btnGuardar.addEventListener('click',()=>{

    nombre          = document.querySelector('#nombre').value;
    apellidoPaterno = document.querySelector('#primerApellido').value;
    apellidoMaterno = document.querySelector('#segundoApellido').value;
    curp            = Number(document.querySelector('#curp').value);

    console.log(nombre,apellidoPaterno,apellidoMaterno,curp);
    
    return nombre, apellidoPaterno, apellidoMaterno, curp

})







