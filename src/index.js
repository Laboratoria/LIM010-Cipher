/* Acá va tu código */

const password = document.getElementById('contraseña'.value);
const enter = document.getElementById('enter');
let contador = 0;

enter.addEventListener("click", () => {
    const elementInput = document.getElementById('contraseña');
    const password = elementInput.value;
    console.log(password)
}
if (password === 2){
contador = numero + 1
}

// const numero = si dentro del input, el usuario escribe un string y yo quiero pasarlo a number tengo que utilizar
//parseInt

// si password esigual a paquita entonces 'Bienvenida Paquita'
if (password === "paquita") {
    console.log("bienvenida")
} else {

}

do{
    console.log("numero menor que tres")
} while {(numero <3)
console.log(numero)
}

for (let i= 0; i<5; i= i+1);
console.log(i)
//esta funcion de do y while es un bucle y el while es el punto de fin. es necesario que haya un while
//para que termine.



function go() {
    if (document.form.password.value == 'CONTRASEÑA' && document.form.login.value == 'USUARIO') {
        document.form.submit();
    }
    else {
        alert("Ya utilizaste todos tus intentos, en este momento no podrás ingresar.");
    }
}

