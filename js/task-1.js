// `use strict`
// Task 1. Ordering droids
function makeTransaction(quantity, pricePerDroid) {
    const totalPrice = Number(quantity) * Number(pricePerDroid);
    if (totalPrice) {
        
        return `You ordered ${quantity} droids worth ${totalPrice} credits!`;
    } else {
        return `Please enter valid arguments - numeric values' for the makeTransaction function` ;
    }
}
console.log(makeTransaction(5, 3000)); // "You ordered 5 droids worth 15000 credits!"
console.log(makeTransaction(3, 1000)); // "You ordered 3 droids worth 3000 credits!"
console.log(makeTransaction(10, 500)); // "You ordered 10 droids worth 5000 credits!" 