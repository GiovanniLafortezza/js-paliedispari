// --------------------- PALINDROMA --------------------------

let word = prompt("Iserisci una parola");
let isPalindroma = areStringEqual(word);

    if (isPalindroma)
        console.log("la parola è palindroma");
    else
        console.log("la parola non è palindroma");


//------------------------- PARI O DISPARI ------------------------

let selectOddOrEven = prompt("Scegli pari o dispari");
console.log(selectOddOrEven);

let inputNumberFrom1To5 = prompt("Inserire un numero da 1 a 5");
console.log(inputNumberFrom1To5);
inputNumberFrom1To5 = parseInt(inputNumberFrom1To5);

let generateRandomNumberFrom1To5 = getRandomIntegerFromInterval(1, 5);
console.log(generateRandomNumberFrom1To5);

let sumOfTwoNumbers = sumTwoNumber(inputNumberFrom1To5, generateRandomNumberFrom1To5);
console.log(sumOfTwoNumbers);

let OddOrEven = isOddOrEven(sumOfTwoNumbers)

if(OddOrEven) {
    console.log("il numero è pari");
} else {
    console.log("il numero è dispari");
}
// ---------------------- FUNZIONI --------------------------------

//------------- 
function getReverseWord(str) {
    let strReverse = "";
    
    for( let i = str.length - 1; i >= 0; i--){
        
         strReverse += str[i];
    }
    
    return strReverse;

}

function areStringEqual (str){
    let revertedStr = getReverseWord(str);
    
    if (revertedStr == str) return true;
    else return false;
}

function getRandomIntegerFromInterval(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function sumTwoNumber(num1, num2) {
    let result = num1 + num2;
    return result;
}

function isOddOrEven(num) {
    if(num % 2 == 0) {
        return true;
    } else {
        return false;
    }
}


