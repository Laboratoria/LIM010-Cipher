window.cipher = {
  encode: (offset, string) => {
    let cod="";
    for(let i=0;i<string.length;i++) {
      let numascii=string[i].charCodeAt();
      if (numascii >=65 && numascii<=90){
        cod += String.fromCharCode((parseInt(offset)+ numascii - 65 ) % 26 + 65);
      } else {
        cod=string[i];
      }
    }
    return cod;

  },
  decode: (offset, string) => {
    let dec = '';
    for (let i = 0; i < string.length; i++) {
      let numascii = string[i].charCodeAt();
      if ((numascii >= 65) && (numascii <= 90)) {
        if (numascii >= 65 + parseInt(offset) % 26) {
          dec += String.fromCharCode((numascii - parseInt(offset) % 26 - 65) + 65);
        } else {
          dec += String.fromCharCode((numascii- parseInt(offset) % 26 + 26));
        }
      } else {
        dec += phrase[i];
      }
    }
    return dec;
  },
  createCipherWithOffset: (offset) => {
    return {
      encode: (string) => { cipher.encode(offset, string); },
      decode: (string) => { cipher.decode(offset, string); }
    }
  }
}

