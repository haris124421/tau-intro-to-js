function sum(a, b){
    return a+b
}

console.log(sum(10, 10));

function product(a, b){
    return a*b;
}

console.log(product(50, 60));

const bigProduct = product(100, 100);
console.log(bigProduct);

setTimeout(function () {
    console.log("Hey! You rock!!!!");
}, 2000 );

setTimeout(() => {
    console.log("Hey! You rock!!!!");
}, 2000 );