window.cipher = {
  encode: (offsettocode, datatocode) => {
    /* Acá va tu código que cifra*/
    let cifrardato="";
    for(let i=0;i<datatocode;i++){
      if(datatocode.charCodeAt(i)-97 && datatocode.charCodeAt(i)<=122){
        let cifrado=(datatocode.charCodeAt(i)- 97 + parseInt(offsettocode))% 26 +97;
        
      }
    }
  },

  decode: (offset, string) => {
    /* Acá va tu código que descifra*/
  }
};
