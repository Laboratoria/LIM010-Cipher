window.cipher = {
  encode: (offset, string) => {
    let encodedString = '';
    offset = Math.abs(offset) % 26;
    for (let character of string) {
      if ((character >= 'A' && character <= 'Z') || (character >= 'a' && character <= 'z')) {
        let upperCase = (character >= 'A' && character <= 'Z') ? true : false;
        let charCode = character.toUpperCase().charCodeAt(0) - 65;
        let decodedCharCode = (charCode + offset) % 26;
        encodedString += String.fromCharCode(upperCase ? decodedCharCode + 65 : decodedCharCode + 97);
      } else {
        encodedString += character;
      }
    }
    return encodedString;
  },

  decode: (offset, string) => {
    let decodedString = '';
    offset = Math.abs(offset) % 26;
    for (let character of string) {
      if ((character >= 'A' && character <= 'Z') || (character >= 'a' && character <= 'z')) {
        let upperCase = (character >= 'A' && character <= 'Z') ? true : false;
        let charCode = character.toUpperCase().charCodeAt(0) - 65;
        let decodedCharCode = (charCode - offset) % 26;
        decodedCharCode = (decodedCharCode < 0) ? (26 + decodedCharCode) : decodedCharCode;
        decodedString += String.fromCharCode(upperCase ? decodedCharCode + 65 : decodedCharCode + 97);
      } else {
        decodedString += character;
      }
    }
    return decodedString;
  }
};