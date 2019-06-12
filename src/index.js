const GLOBAL = {
    usuarios: ['Alejandra', 'Rocio', 'Elizabeth'],
    password: 'LABORATORIA',
    loginAttempts: 0,
    divisions: ['divLoginInbox', 'divTransform', 'divNoAttempts']
};

const showOneHideAll = (divIdToShow) => {
    GLOBAL.divisions.forEach((divId) => {
        document.getElementById(divId).className = 'hidden';
    });
    document.getElementById(divIdToShow).className = 'visible';
};

showOneHideAll('divLoginInbox');

let enter = document.getElementById('Ingresar');
enter.addEventListener("click", () => {
    GLOBAL.loginAttempts++;
    const enteredUsername = document.getElementById('getUsername').value;
    const enteredPassword = document.getElementById('getPassword').value;
    if (GLOBAL.usuarios.includes(enteredUsername) && (GLOBAL.password === enteredPassword)) {
        showOneHideAll('divTransform');
    } else {
        alert('Usuario y/o contraseña incorrectos');
        if (GLOBAL.loginAttempts === 3) {
            showOneHideAll('divNoAttempts');
        }
    }
    document.getElementById('getUsername').value = '';
    document.getElementById('getPassword').value = '';
});

let clean = document.getElementById('btnClean');
clean.addEventListener("click", () => {
    document.getElementById('textAreaIn').value = '';
    document.getElementById('textAreaOut').value = '';
    document.getElementById('inputOffset').value = '';
});

let exit = document.getElementById('btnExit');
exit.addEventListener("click", () => {
    showOneHideAll('divLoginInbox');
});

let send = document.getElementById('btnSend');
send.addEventListener("click", () => {
    let email = prompt('Escribe aqui un correo electronico:');
    let subject = 'Envio codigo cifrado-descifrado';
    let body = document.getElementById('textAreaOut').value;
    window.open(`mailto:${email}?subject=${subject}&body=${body}`);
});

let encode = document.getElementById('btnEncode');
encode.addEventListener("click", () => {
    let offset = parseInt(document.getElementById('inputOffset').value);
    let string = document.getElementById('textAreaIn').value;
    let transformedText = cipher.encode(offset, string);
    document.getElementById('textAreaOut').value = transformedText;
});

let decode = document.getElementById('btnDecode');
decode.addEventListener("click", () => {
    let offset = document.getElementById('inputOffset').value;
    let string = document.getElementById('textAreaOut').value;
    let transformedText = cipher.decode(offset, string);
    document.getElementById('textAreaOut').value = transformedText;
});









//PREGUNTAR: que pasa con css. 
//PREGUNTAR: import { strict } from "assert"; porque sale error.


/*
 -> 4 FORMAS DE USAR FOR
const GLOBAL = {
    usuarios: ['Alejandra', 'Rocio', 'Elizabeth'],
    password: 'LABORATORIA',
    loginAttempts: 0,
    divisions: ['divLoginInbox', 'divTransform', 'divSendMail', 'divNoAttempts']
};

for (let i=0; i<GLOBAL.divisions.length; i++){
  console.log(GLOBAL.divisions[i]);
}

for (let divId of GLOBAL.divisions) {
  console.log(divId);
}

GLOBAL.divisions.forEach(function(div){
  console.log(div);
});


GLOBAL.divisions.forEach((div) => {
    console.log(div);
  });

*/