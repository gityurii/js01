// 'number' + 3 + 3
console.log('number' + 3 + 3);
/* Result = number33
Конкатенация 3 строк, где предварительно кажддое число 3 привелось к строке
*/

// null + 3
console.log(null + 3);
/* Result = 3
0 + 3 = 3
*/

// 5 && "qwerty"
console.log(5 && "qwerty");
/* Result = qwerty
true && true => Логический результат true, но отдаст последний верный аргумент qwerty
*/

// +'40' + +'2' + "hillel";
console.log(+'40' + +'2' + "hillel");
/* Result = 42hillel
знак + перед строкой делает ее числом,
40 + 2 = 42
42 + строка = строка + строка
*/

// '10' - 5 === 6;
console.log('10' - 5 === 6);
/* Result = false
в отличие от сложения, вычесть из строки (в виде числа) можно
10 - 5 = 5
5 === 6 => результат сравнения 5 и 6 = false
*/

// true + false
console.log(true + false);
/* Result = 1
булевые знач переводятся в цифры
1 + 0 = 1
*/

// '4px' - 3
console.log('4px' - 3);
/* Result = NaN
Срока с символами не может быть переведена в какое-либо известное число
=> результат не определен
*/

// '4' - 3
console.log('4' - 3);
/* Result = 1
строка 4 переведена в число
4 - 3 = 1
*/

// '6' + 3 ** 0;
console.log('6' + 3 ** 0);
/* Result = 61
'6' + 1 = 61, конкатенация строк
*/

// 12 / '6'
console.log(12 / '6');
/* Result = 2
строка '6' может быть конвертирована в число 6
12 / 6 = 2
*/

// '10' + (5 === 6);
console.log('10' + (5 === 6));
/* Result = 10false
(5 === 6) = false
далее конкатенация 2х строк
*/

// null == ''
console.log(null == '');
/* Result = false
null == 0 => а null - это незаданное значение
*/

// 3 ** (9 / 3);
console.log(3 ** (9 / 3));
/* Result = 27
3 ** 3 = 27
*/

// !!'false' == !!'true'
console.log(!!'false' == !!'true');
/* Result = true
и 'false' и 'true' строки трактуются как булевое true
далее дважды отрицание не меняет значение с 2х сторон
*/

// 0 || '0' && 1
console.log(0 || '0' && 1);
/* Result = 1
'0' && 1 даст логическое true, но результатом будет последний аргумент = 1
*/

// (+null == false) < 1;
console.log((+null == false) < 1);
/* Result = false
(+null == false) трактуется как 0 == false,
0 в булевом значени = false
false == false дает true
true конвертиируется в 1 и идет сравнение 1 < 1
результат = false
*/

// false && true || true
console.log(false && true || true);
/* Result = true
приоритет у && выше чем ||, первый результат считается тут: false && true = false
далее false || true = true
*/

// false && (false || true);
console.log(false && (false || true));
/* Result = false
приоритет для операции в скобках false || true = true
false && true = false
*/

// (+null == false) < 1 ** 5;
console.log((+null == false) < 1 ** 5);
/* Result = false
(+0 == false) < 1
(false == false) < 1
true < 1
1 < 1 = false
*/