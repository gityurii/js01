/*
var services = { "стрижка": "60 грн", "гоління": "80 грн", "Миття голови": "100 грн" };
створити метод price(), який обчислює та повертає загальну вартість "наданих послуг".
створити метод minPrice() - який повертає мінімальний price
створити метод maxPrice() - який повертає максимальний price
*/

var services = {
    "стрижка": "60 грн",
    "гоління": "80 грн",
    "Миття голови": "100 грн",
    price(){
        let sum = 0;
        for (let key in services) {
            if (typeof services[key] != 'function') {
                sum += (Number(services[key].slice(0, services[key].length - 4)));
            }
        }
        return sum;
    },
    minPrice(){
    let minPrice = Number.MAX_SAFE_INTEGER;
        for (let key in services) {
            if (typeof services[key] != 'function') {
                let currentItem = Number(services[key].slice(0, services[key].length - 4));
                if (minPrice > currentItem) {
                    minPrice = currentItem;
                }
            }
        }
        return minPrice;
    },
    maxPrice(){
        let maxPrice = 0;
        for (let key in services) {
            if (typeof services[key] != 'function') {
                let currentItem = Number(services[key].slice(0, services[key].length - 4));
                if (maxPrice < currentItem) {
                    maxPrice = currentItem;
                }
            }
        }
        return maxPrice;
    },
};

services['Розбити скло'] = "200 грн";

console.log(`Загальна вартість "наданих послуг" = ${services.price()} грн`);
console.log(`Мінімальний price = ${services.minPrice()} грн`);
console.log(`Мінімальний price = ${services.maxPrice()} грн`);