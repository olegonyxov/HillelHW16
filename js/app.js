'use strict'
const characters = 'abcdefghijklmnopqrstuvwxyz0123456789';
const genKey = generateKey(16, characters);

function generateKey(keyLength,chars){
    const charsArr = chars.split("")
    let newKey=[];
    let char;
    let usedChars=[];
    while (newKey.length < keyLength){
        let randIndex = Math.floor(Math.random()*charsArr.length)
        char = charsArr[randIndex]
        if (checkKey(char,usedChars)){
            newKey.push(char);
            usedChars.push(char)
        }
    }  
    return newKey.join("")    
}

function checkKey(key,usedKeys){
    let passed = true;
    for (let i in usedKeys){
        if (key === i){
            passed = false
        }
    }
    return passed
}

console.log(genKey);
