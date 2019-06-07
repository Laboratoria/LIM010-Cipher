/* Acá va tu código */

const password = document.getElementById('contraseña'.value);
const enter = document.getElementById('enter');

enter.addEventListener("click", () => {
    const password = document.getElementById('contraseña').value;
    console.log(password)
}
function go(){
    if (document.form.password.value=='CONTRASEÑA' && document.form.login.value=='USUARIO'){ 
            document.form.submit(); 
        } 
        else{ 
             alert("Ya utilizaste todos tus intentos, en este momento no podrás ingresar."); 
        } 
    } 

