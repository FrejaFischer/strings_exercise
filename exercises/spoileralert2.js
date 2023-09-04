let theText = "Jeg er en tekst der skal findes ord i";

const check = theText.includes("ord");

const wordsToCheckFor = ["ord", "tekst"];
if (wordsToCheckFor.includes("ord") || wordsToCheckFor.includes("hyp")) {
  console.log("yes");
}

if (theText.includes(wordsToCheckFor[0]) || theText.includes([1])) {
  console.log("yes text does");
}
