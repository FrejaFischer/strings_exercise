const curseWords = [
  { bad: "var", good: "const" },
  { bad: "float", good: "grid" },
  { bad: "marquee", good: "just don't" },
];

const btn = document.querySelector("button");
const dia = document.querySelector("dialog");
let textElement = document.querySelector("p");
//Først laver vi en variabel, der tager fat i elementet p
let text = textElement.textContent;
//Derefter tager vi fat i tekst indholdet i vores element p
dia.close();
//Her sørger vi or at vores dialog boks er lukket fra starten
btn.addEventListener("click", changeWords);

function changeWords() {
  console.log("changeWords");
  //Herunder siger vi, at hvis vores tekst indhold i p indeholder ordet var (som er et bad word), så skal vi forEach´e igennem vores array, og ved hvert item/element skal vi ændre voes text variabel, hvor vi udskifter alle bad word med good.
  //Vi sætte desuden også vores good word ind i en span, da vi også vil have den er highlightet. Til sidst sætter vi vores p elements nye indre html til at være det nye tekst indhold.
  if (text.includes("var")) {
    curseWords.forEach((element) => {
      text = text.replaceAll(element.bad, `<span>${element.good}</span>`);
      textElement.innerHTML = text;
    });
  } else {
    dia.show();
  }
  //Hvis de bad words ikke er i teksten (altså vi allerede har fjernet dem) så skal vores dialog boks åbne og fortælle dette
}
