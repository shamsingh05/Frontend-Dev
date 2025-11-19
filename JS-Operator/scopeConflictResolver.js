var bonus = 5000;

function calculateSalary(){
    let salary = 40000;
    isPermanent = true;

    if(isPermanent){
        salary += bonus;
    }

    console.log(`${salary}`);
}


console.log(`Global Bonus Before: ${bonus}`);
calculateSalary();
console.log(`Global Bonus After: ${bonus}`);