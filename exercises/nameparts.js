"use strict";

// const str = "Freja Fischer Nielsen";
const str = "Albus Percival Wulfric Brian Dumbledore";

const firstName = str.substring(0, str.indexOf(" "));
const middleName = str.substring(str.indexOf(" ") + 1, str.lastIndexOf(" "));
const lastName = str.substring(str.lastIndexOf(" ") + 1);

console.log(firstName);
console.log(middleName);
console.log(lastName);
