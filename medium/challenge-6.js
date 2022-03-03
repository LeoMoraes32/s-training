const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

//O método filter() recebe cada elemento do
//array e aplica uma instrução condicional a ele.
//Se essa condição for verdadeira, o elemento é
//colocado no array de resultado. Se for falsa,
//o elemento não é colocado lá.
let biggerThanFive = numbers.filter((number) => number > 5);
console.log(biggerThanFive);
