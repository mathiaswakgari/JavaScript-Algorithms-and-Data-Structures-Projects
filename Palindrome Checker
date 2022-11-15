function palindrome(str) {
  const regex = /[A-Za-z0-9]/gi
  const formattedStr = str.toLowerCase().match(regex).join("")
  
  let reverseStr=[]

  for(let i = formattedStr.length; i >= 0; i--)
    reverseStr.push(formattedStr[i])
    
  reverseStr = reverseStr.join("")
  return reverseStr == formattedStr
  
}

palindrome("1 eye for of 1 eye.") 
palindrome("0_0 (: /-\ :) 0-0") 
palindrome("five|\_/|four") 
palindrome("eye")
palindrome("_eye")
