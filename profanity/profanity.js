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
      text = text.replaceAll(element.bad, `<span>${element.good}</span>`);
      //`<span>${element.good}</span>`
      textElement.innerHTML = text;
    });
  } else {
    dia.show();
  }
}
