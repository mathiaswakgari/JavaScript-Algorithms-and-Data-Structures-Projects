function rot13(str) {

  const startingPosition = 65
  const final = 90
  const regex = /[A-Z]/
  
  let answer = ""

  for(let letter in str){
    if(regex.test(str[letter])){
      if(final - str[letter].charCodeAt() < 13){
      
          let difference = final - str[letter].charCodeAt()
          let temp = 12 - difference
          answer += String.fromCharCode(temp + startingPosition)
      }
    else{

      let position = str[letter].charCodeAt()
      answer += String.fromCharCode(position + 13)
      
    }
    }
    else{
      answer += str[letter]
    }
    

  }
  return answer
  
}
  

(rot13("GUR DHVPX OEBJA SBK WHZCF BIRE GUR YNML QBT."));
