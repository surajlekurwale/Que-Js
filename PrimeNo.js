var n = 50;
var primeNumbers = [];
for (var i = 2; i <= n; i++) {
    var flag = true;
    for (var j = 2; j < (i / 2 + 1); j++) {
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