/* Declaramos variables para las acciones y elementos */
const contraseña = document.getElementById("contraseña")
const firstButton = document.getElementById("buttonnext")
const vistalogin = document.getElementById("login")
const vistacipher = document.getElementById("cipher")
const botonCifrado = document.getElementById("buttoncifrar")
const botonDescifrado = document.getElementById("buttondecifrar")
const limpiar =document.getElementById("clear")
/*Loop para la funcionalidad de la contraseña*/
let contador = 0
firstButton.addEventListener("click", () => {
  if (contraseña.value === "LABORATORIA") {

    vistacipher.classList.toggle("show")
    vistalogin.classList.toggle("hide")
  } else if (contador == 3) {

    document.getElementById("error").innerHTML = "Ya utilizaste todos tus intentos, en este momento no podrás ingresar"
  }
  else {
    contador++
    document.getElementById("error").innerHTML = "Contraseña incorrecta"
  }
})
/*Creamos la acciones de los botones anteriormente declarados*/

/*Botón para la funcionalidad de cifrado*/
botonCifrado.addEventListener("click", () => {
  let string = document.getElementById("Datos").value.toUpperCase();
  let offset = parseInt(document.getElementById("num").value);
  document.getElementById("Codigo").innerHTML = cipher.encode(offset, string);
})
/*Botón para la funcionalidad de descifrado*/
botonDescifrado.addEventListener("click", () => {
  let string = document.getElementById("Codigo").value.toUpperCase();
  let offset = parseInt(document.getElementById("num").value);
  document.getElementById("Datos").innerHTML = cipher.decode(offset, string);

})
/*Botón para la funcionalidad de clear*/
limpiar.addEventListener("click", (event) => {
  document.getElementById("Codigo").innerHTML = null;
  document.getElementById("Datos").value = null;
  document.getElementById("Codigo").value = null;
  document.getElementById("Datos").innerHTML = null;
  event.preventDefault()
})
