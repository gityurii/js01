/* Приклад масиву: arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
Напишіть функцію myBlend(arr), яка перемішуватиме переданий їй масив.
 Зверніть увагу: не створювати новий масив, вже перемішаний, а саме перемішувати той, який їй передали.
*/
function randomInteger(min, max) {
    return Math.round(min - 0.5 + Math.random() * (max - min + 1));
}

function myBlend(arr) {
    let swapItem;
    for (let i = 0; i < arr.length; i++) {
        let randomIndex = randomInteger(i, arr.length - 1);
        swapItem = arr[randomIndex];
        arr[randomIndex] = arr[i];
        arr[i] = swapItem;
    }
}

arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

console.log(arr);
myBlend(arr);
console.log(arr);