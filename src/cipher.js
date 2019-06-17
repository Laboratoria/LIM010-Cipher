window.cipher = {
  encode: (offset, string) => {
    let result = '';
    for (let c of string) {
      if (c >= 'A' && c <= 'Z') {
        let ASCIICode = (c.charCodeAt(0) - 65 + offset) % 26 + 65;
        result += String.fromCharCode(ASCIICode);
      } else {
        result += c;
      }
    }
    return result;
  },

  decode: (offset, string) => {
    let decodedString = '';
    offset = Math.abs(offset) % 26;
    for (let char of string) {
      if ((char >= 'A' && char <= 'Z') || (char >= 'a' && char <= 'z')) {
        let upperCase = (char >= 'A' && char <= 'Z') ? true : false;
        let charCode = char.toUpperCase().charCodeAt(0) - 65;
        let decodedCharCode = (charCode - offset) % 26;
        decodedCharCode = (decodedCharCode < 0) ? (26 + decodedCharCode) : decodedCharCode;
        decodedString += String.fromCharCode(upperCase ? decodedCharCode + 65 : decodedCharCode + 97);
      } else {
        decodedString += char;
      }
    }
    return decodedString;
  }
};