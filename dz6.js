// Вивести на екран суму чисел від 1 до 100 включно, які не кратні 3.

let sum = 0;
let sum_from = 1;
let sum_to = 100;

for (let i = sum_from; i <= sum_to; i++) {
    if (i % 3 !== 0) {
        sum += i;
    }
}

console.log(sum);