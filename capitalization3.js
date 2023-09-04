"use strict";

const str = "NikoLINE";

let smallName = str.toLowerCase();
const newname = smallName.replace(smallName[2], smallName[2].toUpperCase());

console.log(newname);
