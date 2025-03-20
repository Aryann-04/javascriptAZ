//QUE 3
let num2 = prompt("Enter your Number: "); 
let sum = 0;

for (let i = 0; i < num2.length; i++) {
    sum += Number(num2[i]); 
}

console.log("Sum of digits:", sum);