/* Acá va tu código */
const contraseña = document.getElementById("contraseña")
const firstButton = document.getElementById("buttonnext")
const vistalogin = document.getElementById("login")
const vistacipher = document.getElementById("cipher")
const botonCifrado = document.getElementById("buttoncifrar")
const botonDescifrado = document.getElementById("buttondecifrar")

let contador = 0
firstButton.addEventListener("click", () => {
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

botonCifrado.addEventListener("click", () => {
  let string = document.getElementById("Datos").value.toUpperCase();
  let offset = parseInt(document.getElementById("num").value);
  document.getElementById("Codigo").innerHTML = cipher.encode(offset, string);
})
botonDescifrado.addEventListener("click", () => {
  let string = document.getElementById("Codigo").value;
  let offset = parseInt(document.getElementById("num").value);
  document.getElementById("Datos").innerHTML = cipher.decode(offset, string);
 
})
document.getElementById("clear").addEventListener("click",(event) =>{
  document.getElementById("Codigo").innerHTML=null;
  document.getElementById("Datos").value=null;
  document.getElementById("Codigo").value=null;
  document.getElementById("Datos").innerHTML=null;
  event.preventDefault()
})
