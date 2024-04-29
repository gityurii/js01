/*
Написати функцію pow(x,y) яка буде приймати 2 цисла,
перше це число яке ми будемо зводити у ступінь, друге у яку ступінь.
Наприклад pow(2,3) функція поверне значення 8.
*/

function pow(x, y) {
    let multiplyResult = 1;
    for (let i = 0; i < y; i++) {
        multiplyResult *= x;
    }
    return multiplyResult;
}

console.log(pow(2,3)); // expected result = 8
console.log(pow(2,10)); // expected result = 1024