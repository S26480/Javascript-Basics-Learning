//Calculator logic

let num1 = 7
let num2 = 0
let operator = "/"

if(operator === "+"){
    console.log(num1 + num2);
}
else if(operator === "-"){
    console.log(num1 - num2);
}
else if(operator === "*"){
    console.log(num1 * num2);
}
else if(operator === "/"){
   if(num2 === 0){
    console.log("num2 cannot be zero");
}
else{
    console.log(num1 / num2);
}
}
