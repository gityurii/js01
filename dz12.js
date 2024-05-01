/*Перевірка теорії ймовірності.
Напишіть функцію яка буде генерувати певну кількість випадкових чисел в діапазоні від 100 до 1000 включно.
Порахувати кількість парних та непарних серед них. Обчислити відсоткове співвідношення - чи буде воно близьке до 50%50?
Приклад функції checkProbabilityTheory(count).Парметр count буде вказувати скільки разів буде генеруватися випадкове число.*/

function randomInteger(min, max) {
    let rand = min - 0.5 + Math.random() * (max - min + 1);
    return Math.round(rand);
}
let rangeStart = 100;
let rangeEnd = 1000;
let iterationCount = 12;
let evenSum = 0;
let oddSum = 0;

function checkProbabilityTheory(count) {
    let currentNumber;
    console.log(`Сгенерировано ${count} чисел: `);
    for (let i = 0; i < count; i++) {
        currentNumber = randomInteger(rangeStart, rangeEnd);
        console.log(currentNumber);
        if (currentNumber % 2 === 0) {
            evenSum += 1;
        }
        else {
            oddSum += 1;
        }
    }
    console.log("Четных = " + evenSum);
    console.log("Нечетных = " + oddSum);
    console.log("Четных : Нечетных " + Math.round(evenSum * 100 / (oddSum + evenSum)) + " : " + Math.round(oddSum * 100 / (oddSum + evenSum)));
}

checkProbabilityTheory(iterationCount);
