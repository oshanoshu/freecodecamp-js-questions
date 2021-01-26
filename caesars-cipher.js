function rot13(str) {

  let answer = '';
  
  for(let i = 0; i < str.length; i++)
  {
    //We only want to shift the alphabets 
    if(str.charCodeAt(i) <= 90 && str.charCodeAt(i) >= 65)
    {
      let n = ((str.charCodeAt(i) - 65)+13)%26;

      answer += String.fromCharCode(65+n);
    }
    else
      answer+=str[i];
  }

  return answer;
}

rot13("SERR PBQR PNZC");
