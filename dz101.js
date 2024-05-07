/*Напишіть регулярний вираз,який допоможе знайти принаймні шість символів і не містяти літери А (великої або малої)*/

var str1 = "12,34 56zxc"; // true
var str2 = "12345abbccd"; //false
var str3 = "bcDE!fg"; //true
var str4 = "Acdefg"; //false

var pattern = /[^a|A]{6}/;

console.log(str1.match(pattern));
console.log(str2.match(pattern));
console.log(str3.match(pattern));
console.log(str4.match(pattern));