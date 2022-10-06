function sum(num1, num2) {
    return num1 + num2;
}

function rest(num1, num2) {
    return num1 - num2;
}

function mult(num1, num2) {
    return num1 * num2;
}

function div(num1, num2) {
    return num1 / num2;
}

function cal(num1, num2, callback) {
    console.log(callback(num1, num2));
};

setTimeout(cal, 5000, 2, 3, sum);


function gretting(name){
    console.log(`Hola ${name}`);
}

setTimeout(gretting, 3000, 'Edu');

function sum(num1, num2){
    console.log (num1 + num2);
}
setTimeout(sum, 2000, 2, 2);

