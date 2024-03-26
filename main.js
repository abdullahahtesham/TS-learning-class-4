var num1 = 10;
var num2 = 5;
console.log(num1 == num2);
console.log(num1 == 10 && num2 == 5); //ture both are correct because && is used for the "AND"
console.log(num1 == 5 && num2 == 10); //ture both are wrong because && is used for the "AND"
console.log(num1 == 10 || num2 == num1); //first  is true second is false so this is ture because || is used for the "OR"
console.log(!(num1 == num2)); //"!" is used for NOT operator
if (num1 == 10) {
    console.log("Hello I am Abdullah");
}
if (num1 == 5) {
    console.log("Hello I am Abdullah");
}
else {
    console.log("under else");
} // conditions are in the around brackets and the curely bracket is use to print of the code
if (num1 == 6) {
    console.log("number is 6");
}
else {
    console.log("number is not 6");
}
if (num1 == 6) {
    console.log("number is 6");
}
else if (num1 == 8) {
    console.log("number is not 6");
}
else if (num1 == 10) {
    console.log("number is 10");
}
var isRaining = true;
if (isRaining) {
    console.log("Wear a raincoat.");
}
else
    console.log("Wear sunglasses");
var name1 = "Ubaid";
if (name1 == "Ubaid") {
    console.log("Welcome Ubaid");
}
else {
    console.log("not registor");
}
