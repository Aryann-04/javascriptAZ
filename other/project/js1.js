//QUE 1 (find factor of N numbers)

let n = prompt ("Enter a Number(QUE 1)")
let i = 1;
for (i = 1; i < n; i++) {
    if (n % i == 0) {
        console.log(i);
    }
}
console.log(n);


