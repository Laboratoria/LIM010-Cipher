/* Acá va tu código */
const contraseña= document.getElementById("contraseña")
const firstButton = document.getElementById("buttonnext")
const vistalogin =document.getElementById("login")
const vistacipher =document.getElementById("cipher")
const botonCifrado=document.getElementById("buttoncifrar")
const botonDescifrado=document.getElementById("buttondecifrar")
const botonSalir=document.getElementById("buttonexit")
let contador = 0
document.getElementById("buttonnext").addEventListener("click",()=>{
  if(contraseña.value==="LABORATORIA"){
 
    vistacipher.classList.toggle("show")
    vistalogin.classList.toggle("hide")
  }else if ( contador ==3 ){
    
    document.getElementById("error").innerHTML ="no puede acceder en este momento"} 
  else {
    contador ++
    document.getElementById("error").innerHTML ="contraseña incorrecta"
  }})
botonCifrado.addEventListener("click",()=>{
  let datatocode=document.getElementById("Datos").value;
  let offsettocode=document.getElementById("offset").value;
  let codigoListo=window.cipher.encode(offsettocode,datatocode);
  document.getElementById("Codigo").value=codigoListo;
}
)
 botonDescifrado.addEventListener("click",()=>{
let codigotodecode=document.getElementById("Código").value;
let offsertodecode=document.getElementById("offset").value;
let datoListo=window.cipher.decode(offsettocode,codigotodecode);
document.getElementById("Datos").value=datoListo;
 })
 botonSalir.addEventListener("click",()=>{
   location.reload()
 }
 )
