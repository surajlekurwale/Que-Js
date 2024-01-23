var Odd:number[] = [];
var Even:number[] = [];

for(let i:number=1; i<=50; i++){
    if(i%2 === 0){
        Even.push(i);
    }
    else{
        Odd.push(i);
    }
}

console.log("Even Numbers are:", Even);
console.log("Odd Numbers are:", Odd);