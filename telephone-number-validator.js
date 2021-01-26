function telephoneCheck(str) {
  //Check if the number of digits is valid
  let digits = str.replace(/\D/g,'');
  
  if(digits.length!=10 && digits.length!=11)
    return false;
  if(digits.length==11 && str[0]!=1)
    return false;

   //check if brackets are valid
  let brackets = 0;
  let i = 0;
  
  while(i < str.length)
  {
    if(str[i]=='(')
      brackets++;
    if(str[i]==')')
      brackets--;
    i++;
  }
  
  if(brackets!=0)
    return false;
    
  //finally check if the writing is valid
  if(str.replace(/1?\s?\(?[\d]+\)?-?\s?[\d]+-?\s?[\d]+/g,'').length ===0)
    return true;
  else
    return false;
}

telephoneCheck("555-555-5555");
