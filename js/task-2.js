function formatMessage(message, maxLength) {
  // if (message.length <= maxLength) {
  //   return message;
  // } else {
  //   return message.slice(0, maxLength) + '...';
  // }

  return message.length <= maxLength
    ? message
    : message.slice(0, maxLength) + '...';
}
console.log(formatMessage('Curabitur ligula sapien', 16)); // "Curabitur ligula..."
console.log(formatMessage('Curabitur ligula sapien', 23)); // "Curabitur ligula sapien"
console.log(formatMessage('Vestibulum facilisis purus nec', 20)); // "Vestibulum facilisis..."
console.log(formatMessage('Vestibulum facilisis purus nec', 30)); // "Vestibulum facilisis purus nec"
console.log(formatMessage('Nunc sed turpis a felis in nunc fringilla', 15)); // "Nunc sed turpis..."
console.log(formatMessage('Nunc sed turpis a felis in nunc fringilla', 41)); // "Nunc sed turpis a felis in nunc fringilla"

// function getSubstring(string, length) {
//   return string.slice(0, length);
// }
// console.log(getSubstring('Hello world', 3));

// const fullName = 'Jacob Mercer';
// console.log(fullName.slice(3)); // 'Jacob Mercer'

// function normalizeInput(input, to) {
//   if (to === 'upper') {
//     return input.toUpperCase();
//   } else {
//     return input.toLowerCase();
//   }
// }
// console.log(normalizeInput("This ISN'T SpaM", 'lower'));
// console.log(normalizeInput("This ISN'T SpaM", 'lower'));
// console.log(normalizeInput('Stay Awhile and Listen', 'upper'));
// console.log(normalizeInput("This ISN'T SpaM", 'upper'));
// console.log(normalizeInput('Big SALE', 'lower'));
// console.log(normalizeInput('Big SALE', 'upper'));
// console.log(normalizeInput('Stay Awhile and Listen', 'upper'));

// function checkForName(fullName, firstName) {
//   fullName.toLowerCase();
//   firstName.toLowerCase();
//   if (fullName.includes('firstName')) {
//     return (checkForName = true);
//   } else {
//     return (checkForName = false);
//   }
// }
// console.log(checkForName('Jason Neis', 'Jacob'));
