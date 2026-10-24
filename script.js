 // selecionamos los elementos que vamos a usar

 const  cajaTexto = document.querySelector('#caja-texto'); // es como un gancho el caula nos permite traer elementos de html y modificarlos en javascrip

 const contador = document.querySelector('#contador')


 // con eto le decimos a la cja de texto que escuche cada vez que ocurre algo

  cajaTexto.addEventListener('input' , () => { // es euqe nos advierte que si algun valor cambia
  let cantidadCaracteres = cajaTexto.value.length; // value representa el contenido actual que el usuario ha escrito en el campo
                                                    // lenght en una propiedad que nos devuelve en numeros con la cantidad exacta de caracteres en el texto

  console.log(cantidadCaracteres); // con esto me muestra el numero exacto  de carecters en consola
  
contador.textContent=`${cantidadCaracteres}/250`; // aca se modifica el contador 



//con esto verificamos si llegamos al limete el borde se pone rojo
if (cantidadCaracteres === 250) {
    cajaTexto.classList.add('borde-rojo');
} else {
    cajaTexto.classList.remove('borde-rojo')
    
}

// classList.add y classlist.remove son herramientas que nos permiten inyectar o quitar clases de Css a un elemento html en tiempo real  

// con el texto se pone rojo si llegamos al limete 

if (cantidadCaracteres === 250) {
    contador.classList.add('borde-rojo');
} else {
    contador.classList.remove('borde-rojo')
    
}



});


