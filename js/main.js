/**
 *
 * La práctica para hoy consiste en maquetar con Bootstrap un Index con:
 *
 * - una barra de menu fija con un logo (a elección, puede ser un icono del FontAwesome) con vínculo al mismo fichero index.html.
 *
 * Incluye:
 * - un botón para salir
 * - un botón de vínculo llamado Ejercicio (como si fuera una sección del menú).
 *
 * En la parte del contenido establecerán una sección con 3 tabs o pestañas con los títulos "admins", "editors" y "users".
 *
 * Dentro de cada tab se mostrará una lista de tarjetas con una foto (q será siempre la misma para cada tipo,
 * una para adminr, otra para editor y otra para user) y debajo los datos del nombre, y demás del objeto Usuario
 *
 * Además, al diseño le añadirán una barra footer no fija, dónde pondréis la fecha a la izquierda y la derecha el nombre.
 * Solo es el Index y cada uno de los elementos está en la documentación de bootstrap
 *
 */

function openBoard(role) {
  var sectionB = document.getElementById("admins-cards");
  var sectionA = document.getElementById("editors-cards");
  var sectionC = document.getElementById("users-cards");

  if (sectionA == role) {
    sectionA.classList.remove("hidden");
    sectionB.classList.add("hidden");
    sectionC.classList.add("hidden");

  } else if (sectionB == role) {
    sectionA.classList.add("hidden");
    sectionB.classList.remove("hidden");
    sectionC.classList.add("hidden");
  } else if (sectionC == role) {
    sectionA.classList.add("hidden");
    sectionB.classList.add("hidden");
    sectionC.classList.remove("hidden");
  }
}


// Date
var d = new Date();
document.getElementById('demo').innerHTML = d.toDateString();

// document.getElementById("demo").innerHTML = d.moment().format();
// moment().format('lll');


/**
 * 
 * 
 * # Tareas para el viernes:
 * - Terminar el maquetado de Bootstrap -- DONE!!
 * - Instalar la libreria de tiempo y que aparezca abajo a la izq con la fecha formateado de manera facil para humanos
 * - Crear una pagina de login y una pagina de despedida --> Done!!
 * - La pagina de login debe tener solo un user y un password --> Done!!
 * - La pagina de despedida, que sea una hoja simple donde aparezca un mensaje estilo ” Se ha desconectado de la sesión. Vuelva a conectarse para acceder”. --> Done!!
 * 
 * 
 */