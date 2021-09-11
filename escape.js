let observed = "observed";
let clearRoads = "clearRoads";
let inputWords = [];

for (let i = 2; i < process.argv.length; i++) {
  inputWords.push(process.argv[i]);
}

tryEscape();

function tryEscape() {
  if (
    (inputWords[0] == observed.toString() &&
      inputWords[2] == clearRoads.toString()) ||
    (inputWords[2] == observed.toString() &&
      inputWords[0] == clearRoads.toString())
  ) {
    if (inputWords[1] == "false" && inputWords[3] == "false") {
      console.log("You can escape");
    } else {
      console.log("You can not escape");
    }
  } else {
    console.log("You can not escape");
  }
}
