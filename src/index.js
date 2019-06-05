/* Acá va tu código */


function go(){
    if (document.form.password.value=='CONTRASEÑA' && document.form.login.value=='USUARIO'){ 
            document.form.submit(); 
        } 
        else{ 
             alert("Ya utilizaste todos tus intentos, en este momento no podrás ingresar."); 
        } 
    } 

