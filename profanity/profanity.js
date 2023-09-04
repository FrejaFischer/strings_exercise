const curseWords = [
  { bad: "var", good: "const" },
  { bad: "float", good: "grid" },
  { bad: "marquee", good: "just don't" },
];

const btn = document.querySelector("button");
const dia = document.querySelector("dialog");
let textElement = document.querySelector("p");
let text = textElement.textContent;
let clickNo = 0;
dia.close();
btn.addEventListener("click", changeWords);

function changeWords() {
  console.log("changeWords");
  if (clickNo < 1) {
    clickNo++;
    curseWords.forEach((element) => {
      text = text.replace(element.bad, element.good);
      // element.classList.add("highlight");
      textElement.textContent = text;
    });
  } else {
    dia.show();
  }
}

// console.log(filterOn("type", "cat"));
// console.log(filterOn("type", "dog"));
// console.log(filterOn("name", "ScoobyDoo"));

// function filterOn(key, value) {
//   return animals.filter((animal) => {
//     if (animal[key] === value) {
//       return true;
//     } else {
//       return false;
//     }
//   });
// }