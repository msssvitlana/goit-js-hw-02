function makeTransaction(quantity, pricePerDroid) {
  const totalPrice = quantity * pricePerDroid;
  return `You ordered ${quantity} droids worth ${totalPrice} credits!`;
}
makeTransaction();
console.log(makeTransaction(5, 3000)); // "You ordered 5 droids worth 15000 credits!"
console.log(makeTransaction(3, 1000)); // "You ordered 3 droids worth 3000 credits!"
console.log(makeTransaction(10, 500)); // "You ordered 10 droids worth 5000 credits!"

// const username = 'Poly';
// console.log(username);
// const message = 'Welcome  ' + username + '!';
// console.log(message);

// let username = 'Poly';

// const message = `Username ${username} is ${username.length} characters  long`;
// console.log(message);

// function add(a, b, c) {
//   console.log(`Adition result equals ${a + b + c}`);
// }
// add(10, 20, 30);
// add(5, 10, 15);

// function makeMessage(name, price) {
//   const message = `You picked ${name}, price per item is ${price} credits`;
//   return message;
// }
// makeMessage('Radar', 6150);
// console.log(makeMessage);
