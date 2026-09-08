let marks = 55;
let bonus = 10;
marks+=bonus;

let grade;
let Remarks;
if(marks>=90){
    grade="A";
}
else if(marks>=70){
    grade="B";
}
else if(marks>=50){
    grade="C";
}
else{
    grade="F";
}

let Result = marks>=50? "Pass" : "Fail";

switch(grade){
    case "A":
        Remarks="Excellent";
        break;
    case "B":
        Remarks="Good";
        break;
    case "C":
        Remarks="Average";
        break;
    case "F":
        Remarks="Needs improvement"
}

console.log("Marks:", marks);
console.log("Grade:",grade);
console.log("Result:",Result);
console.log("Remarks:",Remarks);