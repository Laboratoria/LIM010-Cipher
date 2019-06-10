/* Acá va tu código */
const contraseña= document.getElementById("contraseña")
const firstButton = document.getElementById("buttonnext")
const vistalogin =document.getElementById("login")
const vistacipher =document.getElementById("cipher")
const botonCifrado=document.getElementById("buttoncifrar")
const botonDecifrado=document.getElementById("buttondecifrar")
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
  let codigoListo=window.cipher.encode(datos,offset);
  document.getElementById("Codigo").value=codigoListo;
  
}
)
 
