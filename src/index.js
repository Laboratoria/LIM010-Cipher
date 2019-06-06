/* Acá va tu código */
const contraseña= document.getElementById("contraseña")
const firstButton = document.getElementById("buttonnext")
const vistalogin =document.getElementById("login")
const vistacipher =document.getElementById("cipher")
const vistacodigo=document.getElementById("codigo")
document.getElementById("buttonnext").addEventListener("click",function enable(){
  if(contraseña.value=="LABORATORIA"){
 
    vistalogin.style.display="none";
    vistacipher.style.display="block";
    vistacodigo.style.display="none"
    }
  else{
    document.getElementById("error").innerHTML ="Contraseña incorrecta"
    
  } 
  })
  function cipher(){
    vistalogin.style.display="none";
    vistacipher.style.display="block"
  }
  function codigo(){
    vistalogin.style.display="none";
    vistacodigo.style.display="block";
  }
