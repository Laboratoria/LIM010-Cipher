const GLOBAL = {
    usuarios: ['Alejandra', 'Rocio', 'Elizabeth'],
    password: 'LABORATORIA',
    loginAttempts: 0,
    divisions: ['divLoginInbox', 'divTransform', 'divSendMail', 'divNoAttempts']
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
        alert('Usuario y/o contrasenha incorrectos');
        if (GLOBAL.loginAttempts === 3) {
            showOneHideAll('divNoAttempts');
        }
    }
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