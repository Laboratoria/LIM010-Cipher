var mode="cesar"
window.cipher = {
  encode: (offset, string) => {
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
  

  decode: (offset, string) => {
 
  }

