window.cipher = {
  encode: (offset, string) => {
    let encodedString = '';
    offset = Math.abs(offset) % 26;//transformo a positivo y elimino vueltas
    for (let character of string) {
      if ((character >= 'A' && character <= 'Z') || (character >= 'a' && character <= 'z')) {
        let upperCase = (character >= 'A' && character <= 'Z') ? true : false;//upperCase es True si character es mayuscula... false caso contrario
        let charCode = character.toUpperCase().charCodeAt(0) - 65;//variable charCode guarda el codigo de 0 a 25 de character
        let decodedCharCode = (charCode + offset) % 26;//variable decodedCharCode guarda el codigo resultado de 0 a 25
        encodedString += String.fromCharCode(upperCase ? decodedCharCode + 65 : decodedCharCode + 97);//sumo 65 (Mayusc) o 97 (Minusc) y concateno a encodedString
      } else {
        encodedString += character;//concateno a encodedString el character original
      }
    }
    return encodedString;
  },

  decode: (offset, string) => {
    let decodedString = '';
    offset = Math.abs(offset) % 26;//transformo a positivo y elimino vueltas
    for (let character of string) {
      if ((character >= 'A' && character <= 'Z') || (character >= 'a' && character <= 'z')) {
        let upperCase = (character >= 'A' && character <= 'Z') ? true : false;//upperCase es True si character es mayuscula... false caso contrario
        let charCode = character.toUpperCase().charCodeAt(0) - 65;//variable charCode guarda el codigo de 0 a 25 de character
        let decodedCharCode = (charCode - offset) % 26;//variable decodedCharCode guarda el codigo resultado de 0 a 25
        decodedCharCode = (decodedCharCode < 0) ? (26 + decodedCharCode) : decodedCharCode;//si el decodedCharCode es negativo, entonces le sumo 26 para que sea un codigo valido entre 0 a 25
        decodedString += String.fromCharCode(upperCase ? decodedCharCode + 65 : decodedCharCode + 97);//sumo 65 (Mayusc) o 97 (Minusc) y concateno a encodedString
      } else {
        decodedString += character;//concateno a encodedString el character original
      }
    }
    return decodedString;
  }
};