/*Вам необхідно написати функцію findValueByKey(companyName),
яка буде приймати значення у вигляді companyName та надавати інформацію про цю subCompany.
*/

const company = {
    name: 'Велика Компанія',
    type:'Головна компанія',
    platform: 'Платформа для продажу квитків',
    sellsSolution: 'Рішення для продажу квитків',
    clients: [
        {
            name: 'Клієнт 1',
            type: 'subCompany',
            uses: 'ПО для продажу квитків',
            sells: 'Рішення для продажу квитків',
            partners: [
                {
                    name: 'Клієнт 1.1',
                    type: 'subSubCompany',
                    uses: 'Рішення для продажу квитків',
                    sells: 'Рішення для продажу квитків',
                },
                {
                    name: 'Клієнт 1.2',
                    type: 'subSubCompany',
                    uses: 'Рішення для продажу квитків',
                    sells: 'Рішення для продажу квитків',
                    partners: [
                        {
                            name: 'Клієнт 1.2.3',
                            type: 'subSubCompany',
                            uses: 'Рішення для продажу квитків',
                            sells: 'Рішення для продажу квитків',
                        }
                    ]
                }
            ]
        },
        {
            name: 'Клієнт 2',
            type: 'subCompany',
            uses: 'ПО для продажу квитків',
            sells: 'Рішення для продажу квитків'
        }
    ]
};

function findValueByKey(companyName, company) {
    if (company.name === companyName) {
        console.log(`Ваш клиент '${companyName}' найден. Информация об объекте:`);
        console.log(company);
        return true;
    }
    else if (company.clients) {
        for (let client of company.clients) {
            if (client.name === companyName) {
                console.log(`Ваш клиент '${companyName}' найден. Информация об объекте:`);
                console.log(client);
                return true;
            }
            if (client.partners) {
                let result = findValueByKey(companyName, { clients: client.partners });
                if (result) {
                    return result;
                }
            }
        }
    }
    else return null;
}
console.log("=========================Test1:")
const companyName = 'Велика Компанія';
if (!findValueByKey(companyName, company)) {console.log(`Ваш клиент ${companyName} не найден.`)}

console.log("=========================Test2:")
const companyName2 = 'Клієнт 1';
if (!findValueByKey(companyName2, company)) {console.log(`Ваш клиент ${companyName2} не найден.`)}

console.log("=========================Test3:")
const companyName3 = 'Клієнт 1.2';
if (!findValueByKey(companyName3, company)) {console.log(`Ваш клиент ${companyName3} не найден.`)}

console.log("=========================Test4:")
const companyName4 = 'Клієнт 1.2.3';
if (!findValueByKey(companyName4, company)) {console.log(`Ваш клиент ${companyName4} не найден.`)}

console.log("=========================Test5:")
const companyName5 = 'Noname';
if (!findValueByKey(companyName5, company)) {console.log(`Ваш клиент ${companyName5} не найден.`)}
