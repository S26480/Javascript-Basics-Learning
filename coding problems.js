// 1. Even or odd

//const check = (num)=>{
//    if(num%2 ===0){
    //      return "Even";
//    }
    //      return "Odd";
//}
//console.log(check(4));
//console.log(check(7));
//console.log(check(0));


// 2. Result Evaluator - pass or fail

//function evaluateResult(marks){
//  if(marks>=50 && marks<=100){
//    return "Pass";
//  }
//  else if(marks>=0 && marks<50){
//    return "Fail";
//}
//  else{
//    console.log("Invalid marks");
//    return null;
//  }  
//}
//console.log(evaluateResult(75));
//console.log(evaluateResult(40));
//console.log(evaluateResult(120));


// 3. Maximum Finder — Largest of Three Numbers

//const findMax = (num1, num2, num3)=>{
//    let Maximum;
//    if(num1>=num2 && num1>=num3){
//        Maximum = num1;
//    }
//    else if(num2>=num1 && num2>=num3){
//       Maximum = num2;
//    }
//    else{
//        Maximum= num3;
//    }
//    return Maximum;
//}
//console.log(findMax(10,25,15));
//console.log(findMax(5,3,8));
//console.log(findMax(9,9,2));

// 4. Accumulator — Sum from 1 to N

//function sumToN(num){
//    let sum=0;
//    for(let i = 1; i<=num; i++){
//        sum+=i;
//    }
//    return sum;
//}
//console.log(sumToN(5));
//console.log(sumToN(10));

// 5. Multiplication Table Generator
//function printTable(num){
//    let i = 1;
//    do{
//        result= num * i;
//        console.log(num+ "*"+ i+ "="+ result);
//        i++;
//    }
//    while(i<=10);
//}
//printTable(3);

// 6. Digit Counter — Number Length Finder
//function countDigits(num){
//    let count=0;
//    do{
//        num= (num- (num %10))/10;
//        count++;
//    }
//    while(num>0){
//        return count;
//    }
//}
//console.log(countDigits(1234));
//console.log(countDigits(9));
//console.log(countDigits(10000));

// 7. Number Reverser

//function reverseNumber(num){
//    let reversed=0;
//    while(num>0){
//        let lastDigit=num%10;
//        reversed= reversed*10 + lastDigit;
//        num=(num- (num%10))/10;
//    }
//    return reversed;
//}
//console.log(reverseNumber(1234));
//console.log(reverseNumber(500));
//console.log(reverseNumber(91));

// 8. Factorial Engine

//function factorial(num){
//    let result = 1;
//    for(let i=1; i<=num; i++){
//        result= result * i;
//    }
//    return result;
//}
//console.log(factorial(5));
//console.log(factorial(3));
//console.log(factorial(1));

//9. Prime Validator

//function isPrime(num){
//    if (num < 2) {
//        return false;
//    }
//    for (let i= 2; i<num; i++){
//        if(num % i === 0){
//            return false;
//        }
//    }
//    return true;
//}
//console.log(isPrime(7));
//console.log(isPrime(10));
//console.log(isPrime(2));

// 10. Pattern Builder — Star Triangle

//function printPattern(num){
//    for(let i=1; i<=num; i++){
//        let result="";
//        for(let j=1; j<=i; j++){
//            result= result+ "*";
//        }
//        console.log(result);
//    }
//}
//printPattern(4);