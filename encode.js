const CHARACTERS_BETWEEN_CODE = 5;
let allWords = [];
let characters = "";
let encryptedCode = [];

for (let i = 2; i < process.argv.length; i++) {
  allWords.push(process.argv[i]);
}

for (let i = 0; i < allWords.length; i++) {
  characters += allWords[i];
  characters += " ";
}

for (let i = 0; i < characters.length; i++) {
  encryptedCode.push(characters[i]);
  for (let y = 1; y < CHARACTERS_BETWEEN_CODE; y++) {
    let randomNumber = Math.floor(Math.random() * 57) + 65;
    let randomCharacter = String.fromCharCode(randomNumber);
    encryptedCode.push(randomCharacter);
  }
}
console.log(encryptedCode.join(""));
