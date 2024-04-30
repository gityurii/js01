/* Необхідно написати власну реалізацію функцій padEnd та padStart,
    але у вас повинна бути одна функція pad(‘qwerty’, ‘+’, true), яка приймає чотири аргументи:
    - рядок, до якого буде додаватися символ.
    - символ, який буде додаватися.
    - Скільки додавати символів
    - булеве значення, яке вказує, куди додавати символ. Якщо true, то до початку, якщо false, то в кінець.
    - Останній аргумент повинен працювати як і в оригінальній функції, а саме якщо наш рядок з 5 символів,
    а ви вказуєте знаачення 6, то додаєте тільки один символ */

function pad(baseString, addedSymbol, newLength, startOrEnd) {
    let lengthDiff = newLength - baseString.length;
    if (lengthDiff < 0) return baseString;

    if (startOrEnd) {
        return addedSymbol.repeat(lengthDiff) + baseString;
    } else {
        return baseString + addedSymbol.repeat(lengthDiff);
    }
}

console.log(pad('123', '+', 6, true));
console.log(pad('hello', '+', 2, true));
console.log(pad('word', '#', 8, false));