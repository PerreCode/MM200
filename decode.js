let newWord = [];
let allWords = [];
let characters="";

for(let i=2; i<process.argv.length; i++){
allWords.push(process.argv[i]);
}

for(let i=0; i<allWords.length; i++){
    characters+=allWords[i]
    characters+= " ";   
}

for(let i=0; i<characters.length; i+=5){
    newWord.push(characters.slice(i, i+1));
}
console.log(newWord.join(""));



