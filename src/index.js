/* Acá va tu código */
const contraseña= document.getElementById("contraseña")
const firstButton = document.getElementById("buttonnext")
const vistalogin =document.getElementById("login")
const vistacipher =document.getElementById("cipher")
const vistacodigo=document.getElementById("codigo")
let contador = 0
document.getElementById("buttonnext").addEventListener("click",()=>{
  if(contraseña.value=="LABORATORIA"){
 
    vistalogin.style.display="none";
    vistacipher.style.display="block";
    vistacodigo.style.display="none"
    
  }else if ( contador ==3 ){
    
    document.getElementById("error").innerHTML ="no puede acceder en este momento"} 
  else {
    contador ++
    document.getElementById("error").innerHTML ="contraseña incorrecta"
  }})
 
