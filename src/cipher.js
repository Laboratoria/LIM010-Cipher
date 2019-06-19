window.cipher = {
  encode: (offset, string) => {
    let cod = "";
    /*let numascii=0;*/
    for (let i = 0; i < string.length; i++) {/*Loop for para cada letra del string*/
      let numascii = string.charCodeAt(i);/*Cambio from string to ASCII*/
      if (numascii >= 65 && numascii <= 90) {/*Condicional  mayúsculas*/
        numascii = (numascii - 65 + parseInt(offset)) % 26 + 65;/*Fórmula de cifrado cesar*/
      }
      else if (numascii >= 97 && numascii <= 122) {/*Condicional minúsculas*/
        numascii = (numascii - 97 + parseInt(offset)) % 26 + 97;
      }
      else if (numascii === 32) {/*Condicional para espacios*/
        numascii = 32;
      }
      else {
        break;
      }
      cod += String.fromCharCode(numascii)
    }
    return cod;

  },

  decode: (offset, string) => {
    let dec = "";
    /*let numascii=0;*/
    for (let i = 0; i < string.length; i++) {/*Loop for para cada letra del string*/
      let numascii = string.charCodeAt(i)/*Cambio from string to ASCII*/
      if (numascii >= 65 && numascii <= 90) {/*Condicional mayúsculas*/
        numascii = 90 - ((90 - string.charCodeAt(i) + parseInt(offset)) % 26);/*Fórmula descifrado cesar*/
      }
      else if (numascii >= 97 && numascii <= 122) {/*Condicional minúsculas*/
        numascii = 122 - ((122 - numascii + parseInt(offset)) % 26);
      }
      else if (numascii === 32) {/*Condicional para espacios*/
        numascii = 32;
      }
      else {
        break;
      }
      dec += String.fromCharCode(numascii);
    }
    return dec;
  }
};
