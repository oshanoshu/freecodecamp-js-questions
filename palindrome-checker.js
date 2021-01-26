function palindrome(str) {

  //Replacing all non-alphanumeric characters and converting the string to lower case
  str = str.replace(/[^A-Za-z0-9]/g,'').toLowerCase();
  
  for(let i = 0; i < str.length/2; i++)
  {
    if(str[i]!=str[str.length-i-1])
      return false;
  }
  return true;
}

palindrome("eye");
