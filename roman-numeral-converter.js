function convertToRoman(num) {

//Map of all the Roman Numerals character to it's value
 const values = {'M': 1000,  'CM': 900, 'D': 500,'CD': 400, 'C': 100, 'XC':90, 'L': 50, 'XL': 40, 'X': 10, 'IX': 9,  'V':5, 'IV':4, 'I': 1};
 let roman = '';
 for(let v in values)
 {
     while(num >= values[v])
     {
         roman += v;
         num = num - values[v];
     }
 }
 return roman;
}

convertToRoman(36);
