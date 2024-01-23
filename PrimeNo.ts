var num: number = 50;
var primeNumbers: number[] = [];

for (let i: number = 2; i <= num; i++) {
    let flag: boolean = true;
    for (let j: number = 2; j < (i / 2 + 1); j++) {
        if (i % j == 0) {
            flag = false;
            break;
        }
    }
    if (flag) {
        primeNumbers.push(i);
    }
}

console.log("Prime numbers are: ", primeNumbers);