//Øvelse 1
// let myName = "Peter";
// let type = "cat";
// let animalName = "Mandu";

// // const line = `My name is ${myName}.\nI have a ${type} called ${animalName}`;

// console.log(`My name is ${myName}.\nI have a ${type} called ${animalName}`);

// myName = "Freja";
// type = "cat";
// animalName = "Billie Bob";

// console.log(`My name is ${myName}.\nI have a ${type} called ${animalName}`);

// console.log(myName.length);
// //console.log(5)
//*************************************/

//Øvelse 2
// const name = "Albus Percival Wulfric Brian Dumbledore";
// console.log(name.length);
// //giver længden af name MED mellemrum

// console.log(name[2]);
// //name[2]=b

// console.log(name[6]);
// //name[6]=P

// console.log(name.indexOf("D"));
// // ELLER
// console.log(name[29]);
// //the index of the first D in Dumbledore is index 29

// console.log(name.length - 1);
// //ELLER
// console.log(name.lastIndexOf("e"));
// //Finds the index of the last character in the string
//*************************************/

//Øvelse 3
// const str1 = "  There is    space here  \n  ";
// const str2 = str1.trim();

// console.log(str2);
// //str2 = "There is    space here"

// const str = "   Hello, World!   ";
// const trimmedStr = str.trim();

// console.log(trimmedStr);
// //str2 = "Hello, World!"
// //.trim() fjerne whitespace først og sidst i en string. Fjerner ikke \n, men fjerner whitespace efter det

//*************************************/

//Øvelse 4
// const fullName = "Peter Heronimous Lind";
// const firstName = fullName.substring(0, 5);

// console.log(firstName + "_");
// //console.log(Peter_)
// //substring(0,5) tager fra plads 0 og er allerede slut ved nr 5. Altså tager den ikke plads 5´s indhold med og derfor er der ikke et mellemrum til sidst
//*************************************/

//Øvelse 5
// const name = "Albus Percival Wulfric Brian Dumbledore";

// console.log(name.substring(0, 5) + "_");
// //Giver Albus_ (underscore er for at tjekke om der er et skjult mellemrum til sidst i vores output)

// console.log(name.substring(name.indexOf("D")) + "_");
// //Giver Dumbledore_

// console.log(name.substring(name.indexOf("W"), 22) + "_");
// //ELLER
// console.log(name.substring(name.indexOf("W"), name.indexOf("W") + 7) + "_");
// //ELLER
// console.log(name.substring(name.indexOf("W"), name.lastIndexOf("c") + 1) + "_");
// //Giver Wulfric

// console.log("_" + name.substring(name.indexOf("W") - 1, name.lastIndexOf("c") + 1) + "_");
// //Giver _ Wulfric_

// console.log("_" + name.substring(name.lastIndexOf("i"), name.lastIndexOf("n") + 1) + "_");
// //Giver _ian_

// console.log("_" + name.substring(name.indexOf("b"), name.lastIndexOf("s") + 1) + "_");
// //Giver _bus_
//*************************************/

//Øvelse 6

console.log("Goethestraße".toLocaleUpperCase());
console.log("Goethestraße".toUpperCase());

const string = "efjbqwlj rkjfnewir kerjfnewir";
console.log(string.indexOf(" "));
console.log(string.lastIndexOf(" "));
const string2 = string.substring(string.indexOf(" ") + 1, string.lastIndexOf(" "));
console.log(string2);

const string3 = string.substring(string.indexOf(" ") + 1, string.lastIndexOf(" "));
console.log(string3);
// console.log(string.slice(-10));
