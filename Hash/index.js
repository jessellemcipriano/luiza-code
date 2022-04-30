
let arrayHash = new Array();
let wordsToHash = ["Luiza", "Luna", "Bia", "Luana"];


function getCharCode(str, n) {
    let i, tamS = str.length;
    let hash = 0;
    for (i = 0; i < tamS; i++) {
        hash += str[i].charCodeAt();
    }
    return hash % n;
}


function createHash(word) {
    let Key = "maeToNoLuizaCode"
    let secondKey = "magaluArrasa"
    const wordLength = word.length
    Key = getCharCode(Key.split(''), wordLength)
    secondKey = getCharCode(secondKey.split(''), wordLength)
    const newWordValue = getCharCode(word.split(''), wordLength)
    let hash = Math.floor((Key + secondKey + newWordValue) / (wordLength * 0.1))
    while (arrayHash[hash] !== undefined) {
        hash++;
    }
    return hash
}

wordsToHash.forEach(function (value, index) {
    let indexHash = createHash(value);
    console.log(value + ': ' + indexHash)
    arrayHash[indexHash] = value;
});

console.log(arrayHash)

