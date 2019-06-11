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
    };
    return result;
  },
  decode: (offset, string) => {
    let result = '';
    for (let c of string) {
      if (c >= 'A' && c <= 'Z') {
        let ASCIICode = (c.charCodeAt(0) - 65 - offset) % 26 + 65;
        result += String.fromCharCode(ASCIICode);
      } else {
        result += c;
      }
    };
    return result;
  }
};