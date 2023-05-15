function calculateVowels(str) {
    const vowels = { А: true, И: true, О: true, У: true, Ы: true, Э: true, Е: true, Ё: true, Ю: true, Я: true };
    let count = 0;
    let letters = str.toUpperCase().split("");
    function calcVowels (val) { 
      if (val in vowels)
        count ++;
    }
    letters.forEach(calcVowels); 
    return count;
 }

function calculateVowels2(str) {
    const vowels = { А: true, И: true, О: true, У: true, Ы: true, Э: true, Е: true, Ё: true, Ю: true, Я: true };
    let count = 0;
    let letters = str.toUpperCase().split("");
    function calcVowels2 (val) { 
      if (val in vowels) {
        count ++;
        return true;
    }
    }
    letters.filter(calcVowels2); 
    return count;
 }

function calculateVowels3(str) {
    const vowels = { А: true, И: true, О: true, У: true, Ы: true, Э: true, Е: true, Ё: true, Ю: true, Я: true };
    let count = 0;
    let letters = str.toUpperCase().split("");
    function calcVowels3 (res,val) { 
      if (val in vowels)
        count ++;
    }
    letters.reduce(calcVowels3,0); 
    return count;
 }


 
let userStr = prompt( "Напишите любую фразу или предложение (на русском)" );

alert( "В данном выражении количество глаcных букв: " + calculateVowels(userStr) );
alert( "В данном выражении количество глаcных букв: " + calculateVowels2(userStr) );
alert( "В данном выражении количество глаcных букв: " + calculateVowels3(userStr) );
