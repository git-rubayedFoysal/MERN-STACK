// CURD Operation on object

// C-> create a object 
const userObj = {
    userName: "Foysal",
    age: 23,
    amount: 23000,
    pin: 123123
};



// U-> update
// userObj.pin = 12120;
// console.log(userObj.pin);

// console.log(userObj.userName);
// console.log(userObj.age);

// D-> Delete
// delete userObj.pin;
// console.log(userObj);

// alternative method for access 
// console.log(userObj["amount"]);

// for..in loop
// for (let key in userObj) {
//     console.log(`Keys: ` + key, `Values: ` + userObj[key]);
// }
userObj["pin"] = 10000;
// for..of loop // recommended
for (let [key, value] of Object.entries(userObj)) {
    console.log(key + `: ` + value);
}



