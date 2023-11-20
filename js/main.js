// --------------------- POLINDROMA --------------------------

let word = prompt("Iserisci una parola");
let isPalindroma = areStringEqual(word);

    if (isPalindroma)
        console.log("la parola è palindroma");
    else
        console.log("la parola non è palindroma");




// ---------------------- FUNZIONI --------------------------------

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