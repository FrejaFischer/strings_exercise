"use strict";

const str = "NikoLINE";

let smallName = str.toLowerCase();
const newname = smallName.replace(smallName[0], smallName[0].toUpperCase());

console.log(newname);
