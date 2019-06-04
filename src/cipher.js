import { strict } from "assert";

window.cipher = {
  encode: (offset, string) => {
    /* Acá va tu código que cifra*/
    let result = '';
    for (let indexString = 0; indexString < string.length; indexString++){
      if (string[indexString] in ['A'..'Z']) {
        //transformar el caracter usando el offset.
      } else {
        result = result+string[indexString];
      }

    }
    return result;
  },
  decode: (offset, string) => {
    /* Acá va tu código que descifra*/
  }
};
