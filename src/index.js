/* Acá va tu código */
const contraseña = document.getElementById("contraseña")
const firstButton = document.getElementById("buttonnext")
<<<<<<< HEAD
const vistalogin = document.getElementById("login")
const vistacipher = document.getElementById("cipher")
const botonCifrado = document.getElementById("buttoncifrar")
const botonDescifrado = document.getElementById("buttondecifrar")
const botonSalir = document.getElementById("buttonexit")
=======
const vistalogin =document.getElementById("login")
const vistacipher =document.getElementById("cipher")
const botonCifrado=document.getElementById("buttoncifrar")
const botonDescifrado=document.getElementById("buñttondecifrar")
const botonSalir=document.getElementById("buttonexit")
>>>>>>> d9c6d4f1c3c8aa7e930c67ec698f14a54be4bffc
let contador = 0
document.getElementById("buttonnext").addEventListener("click", () => {
  if (contraseña.value === "LABORATORIA") {

    vistacipher.classList.toggle("show")
    vistalogin.classList.toggle("hide")
  } else if (contador == 3) {

    document.getElementById("error").innerHTML = "no puede acceder en este momento"
  }
  else {
<<<<<<< HEAD
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

=======
    contador ++
    document.getElementById("error").innerHTML ="contraseña incorrecta"
  }})
botonCifrado.addEventListener("click",()=>{
  let datatocode=document.getElementById("Datos").value;
  let offsettocode=document.getElementById("offset").value;
  let codigoListo=window.cipher.encode(offset,string);
  document.getElementById("Código").value=codigoListo;
}
)
 botonDescifrado.addEventListener("click",()=>{
  let codigotodecode=document.getElementById("Código").value;
  let offsettodecode=document.getElementById("offset").value;
document.getElementById("Datos").value= datoListo;
 })
 botonSalir.addEventListener("click",()=>{
   location.reload()
 }
 )
>>>>>>> d9c6d4f1c3c8aa7e930c67ec698f14a54be4bffc
