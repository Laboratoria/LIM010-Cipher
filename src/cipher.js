var mode="cesar"
window.cipher = {
  encode: (offset, string) => {
<<<<<<< HEAD
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
=======
    let result="";
    if(mode=="cesar"){
      for(let i=0;i<string.length;i++){
        let texto =string.chartCodeAt(i);
        if(texto >= 65 && texto<=90){
          result += String.fromCharCode((texto-65+offset)% 26 +65);
        } else if(texto<= 97 && texto<=122){
          result += String.fromCharCode((c-97+ offset) % 26 +97);
        }else{
          result += text.chartCodeAt(i)
        }
        }
        }
        return result
      }
    }
  
>>>>>>> d9c6d4f1c3c8aa7e930c67ec698f14a54be4bffc

  },
  decode: (offset, string) => {
<<<<<<< HEAD
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
=======
 
  }
>>>>>>> d9c6d4f1c3c8aa7e930c67ec698f14a54be4bffc

