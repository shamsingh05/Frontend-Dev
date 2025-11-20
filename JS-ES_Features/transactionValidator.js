
const transactions = [
{ id: 1, amount: 2000 },
{ id: 2, amount: -500 },
{ id: 3 },
null
];

let valid = [];
let invalid = [];

for(let i = 0 ; i < transactions.length ; i++){
    try{
        const trans = transactions[i];

        if(trans === null){
            throw new Error("Null Transaction History");
        }
        if(!trans.id || trans.amount === undefined){
            throw new Error("Missing id or amount");
        }
        if(trans.amount < 0){
            throw new Error("amount less than 0");
        }
        valid.push(trans);
    }
    catch(err){
        invalid.push({
            index : i,
            error : err.message,
            entry : transactions[i]
        });
    }
}

console.log("Successful Transactions:", valid.length);
console.log(valid);

console.log("\nFailed Transactions:", invalid.length);
console.log(invalid);


