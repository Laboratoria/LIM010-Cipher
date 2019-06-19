/* Declaramos variables para las acciones y elementos */
const contraseña = document.getElementById("contraseña")
const firstButton = document.getElementById("buttonnext")
const vistalogin = document.getElementById("login")
const vistacipher = document.getElementById("cipher")
const botonCifrado = document.getElementById("buttoncifrar")
const botonDescifrado = document.getElementById("buttondecifrar")
const limpiar =document.getElementById("clear")
const error=document.getElementById("error")
let cajadatos=document.getElementById("Datos")
let cajacodigo=document.getElementById("Codigo")
let cajaoffset=document.getElementById("num")
/*Loop para la funcionalidad de la contraseña*/
let contador = 0
firstButton.addEventListener("click", () => {
  if (contraseña.value === "LABORATORIA") {

    vistacipher.classList.toggle("show")
    vistalogin.classList.toggle("hide")
  } else if (contador == 3) {

   error.innerHTML = "Ya utilizaste todos tus intentos, en este momento no podrás ingresar"
  }
  else {
    contador++
    error.innerHTML = "Contraseña incorrecta"
  }
})
/*Creamos la acciones de los botones anteriormente declarados*/

/*Botón para la funcionalidad de cifrado*/
botonCifrado.addEventListener("click", () => {
  let string = cajadatos.value.toUpperCase();
  let offset = parseInt(cajaoffset.value);
  cajacodigo.innerHTML = cipher.encode(offset, string);
})
/*Botón para la funcionalidad de descifrado*/
botonDescifrado.addEventListener("click", () => {
  let string = cajacodigo.value.toUpperCase();
  let offset = parseInt(cajaoffset.value);
  cajadatos.innerHTML = cipher.decode(offset, string);

})
/*Botón para la funcionalidad de clear*/
limpiar.addEventListener("click", (event) => {
  cajacodigo.innerHTML = null;
  cajadatos.value = null;
  cajacodigo.value = null;
  cajadatos.innerHTML = null;
  event.preventDefault()
})
