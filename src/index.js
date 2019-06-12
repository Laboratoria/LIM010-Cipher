/* Acá va tu código */
const contraseña = document.getElementById("contraseña")
const firstButton = document.getElementById("buttonnext")
const vistalogin = document.getElementById("login")
const vistacipher = document.getElementById("cipher")
const botonCifrado = document.getElementById("buttoncifrar")
const botonDescifrado = document.getElementById("buttondecifrar")
const botonSalir = document.getElementById("buttonexit")
let contador = 0
document.getElementById("buttonnext").addEventListener("click", () => {
  if (contraseña.value === "LABORATORIA") {

    vistacipher.classList.toggle("show")
    vistalogin.classList.toggle("hide")
  } else if (contador == 3) {

    document.getElementById("error").innerHTML = "no puede acceder en este momento"
  }
  else {
    contador++
    document.getElementById("error").innerHTML = "contraseña incorrecta"
  }
})
buttoncifrar.addEventListener("click", () => {
  let string = document.getElementById("Datos").value.toUpperCase();
  let offset = parseInt(document.getElementById("num").value);
  document.getElementById("Código").innerHTML = cipher.encode(offset, string);
})
buttondecifrar.addEventListener("click", () => {
  let string = document.getElementById("Datos").value.toUpperCase();
  let offset = parseInt(document.getElementById("num").value);
  document.getElementById("Código").innerHTML = cipher.decode(offset, string);
 
})
document.getElementById("clear").addEventListener("click",(event) =>{
  document.getElementById("Código").innerHTML=null;
  document.getElementById("Datos").value=null;
  event.preventDefault()
})

