let person_age = 1;
let age_adjust;

if      (person_age < 0)                        { alert('Помилка') }
else if (1 <= person_age && person_age <= 10)   { age_adjust = person_age; }
else if (21 <= person_age && person_age <= 99)  { age_adjust = person_age % 10; }
else if (person_age > 99)                       { alert("It's too much"); }

if (0 < person_age && person_age <= 99) {
    switch (age_adjust) {
        case 1:
            console.log(`Тобі ${person_age} рік`);
            break;
        case 2:
        case 3:
        case 4:
            console.log(`Тобі ${person_age} роки`);
            break;
        default:
            console.log(`Тобі ${person_age} років`);
            break;
    }
}