function telephoneCheck(str) {

  const regex = /^(1\s|1)?(\(\d{3}\)|\d{3})(-|\s)?\d{3}(-|\s)?\d{4}$/
  
  return regex.test(str)

}
