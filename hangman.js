const readline = require('readline');
let fails = 0;
let solutionWord = "østre svartisen";

let solutionWords = ["freia melkesjokolade", "freia kvikk lunsj", "nidar stratos", "nidar smash", "freia melkerull", "nidar troika"];
let guessedCharacter;
let wordAsArray = [];
let missingCharacters = [];
const failOutput = [
    ` 
    +---+
    |   |
        |
        |
        |
        |
  =========`, 
 
  ` 
    +---+
    |   |
    O   |
        |
        |
        |
  =========`, 
 
  ` 
    +---+
    |   |
    O   |
    |   |
        |
        |
  =========`, 
 
  ` 
    +---+
    |   |
    O   |
   /|   |
        |
        |
  =========`, 
 
  ` 
    +---+
    |   |
    O   |
   /|\\  |
        |
        |
  =========`, 
 
  ` 
    +---+
    |   |
    O   |
   /|\\  |
   /    |
        |
  =========`, 
  
 
  ` 
    +---+
    |   |
    #   |
   /|\\  |
   / \\  |
        |
  =========`,

  ` 
    
       
    o  
   /|\\/ 
   / \\  
 =======
=========`];
  

  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

  startGame();
  
  function input(){
  rl.question('Skriv inn en bokstav: ', (answer) => {
    console.log(`Du skrev: ${answer}`);
    guessedCharacter = answer;
    console.log(guessedCharacter);
    checkIfRight();
   // rl.close();
  });
}

  function checkIfRight(){
    let fittingCharacter = 0;
    for(let i=0; i<solutionWord.length; i++){
        if (wordAsArray[i]==guessedCharacter){
            missingCharacters[i] = guessedCharacter;
            fittingCharacter ++;
        }
    }
    if(!missingCharacters.includes("-")){
        youWin()
    }else{if(fittingCharacter == 0){
        //feil svar
        fails++;
        console.log(failOutput[fails]);
        console.log(missingCharacters.join(" "));
        console.log(guessedCharacter + " var feil.");
    }else{
        //rett svar
        console.log(failOutput[fails]);
        console.log(missingCharacters.join(" "));
    }}

    if (fails < 6){
    input();
  }else{
      youLoose();
  }
}


function startGame(){
console.clear();
let randomNumber = Math.floor(Math.random()*solutionWords.length);
solutionWord = solutionWords[randomNumber];
wordAsArray = [];
missingCharacters = [];
fails = 0;

for(let i=0; i<solutionWord.length; i++){
    wordAsArray.push(solutionWord.slice(i,i+1));
    if(wordAsArray[i]==" "){
        missingCharacters.push(" ");
    }else{
    missingCharacters.push("-");
    }
  }
  input();
  console.log(failOutput[fails]);
  console.log(missingCharacters.join(" "));
}


function youWin(){
    console.log(failOutput[7]);
    console.log("Gratulerer du vant. Fasit var: " + solutionWord);
    rl.question('Skriv `start` for å starte på nytt: ', (answer) => {
        if (answer == "start"){
            startGame();
        }else{
            youLoose();
        }
      });
}

function youLoose(){
    console.log(failOutput[fails]);
    console.log(`Du har tapt. Ordet var: ` + solutionWord);
    rl.question('Skriv `start` for å starte på nytt: ', (answer) => {
        if (answer == "start"){
            startGame();
        }else{
            youLoose();
        }
      });
}

