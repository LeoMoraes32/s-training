const numbers = [0, 1, 2, 3, 4, 5];
const newNumbers = [...numbers];
const support = [6, 7, 8, 9];

newNumbers.push(...support);
console.log(newNumbers);
