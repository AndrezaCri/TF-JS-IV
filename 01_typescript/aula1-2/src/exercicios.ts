/* 
Exercicio 1: Corrija o problema
*/

let pi = 3.14159;
let tau = pi * 2;

// console.log(`${tau} é ${pi} duas vezes`);

/* 
Exercicio 2:Adapte o codigo para conter tipo
*/
// let fruta: string = "banana";
let fruta: string;
fruta = "banana";

console.log(`Minha fruta preferida é ${fruta}`);

/* 
Exercicio 3: Corrija o problema
*/
let comFome: boolean;
comFome = true;

console.log(`${comFome ? "Estou com fome!!" : "Estou satisfeita."}`);

/* 
Exercicio 4: atribua o tipo do dado a cada constante
em seguida, haverá um erro, corrija-o
*/

const integer: number = 6;
const float: number = 6.66;
const hex: number = 0xf00d;
const binary: number = 0b1010011010;
const octal: number = 0o744;
const negZero: number = -0;
const actuallyNumber: number = NaN;
const largestNumber: number = Number.MAX_VALUE;
const mostBiglyNumber: number = Infinity;

const members: number[] = [
  integer,
  float,
  hex,
  binary,
  octal,
  negZero,
  actuallyNumber,
  largestNumber,
  mostBiglyNumber,
];

members[0] = 12345;

console.log(members);

/* 
Exercicio 5:Adapte o codigo para conter tipo
*/
const sequence: Number[] = Array.from(Array(10).keys());
// const sequence: Array<Number> = Array.from(Array(10).keys());

// const animals1: string[] = ["pangolin", "aardvark", "echidna", "binturong"]; // pode isso?
const animals: String[] = ["pangolin", "aardvark", "echidna", "binturong"];
// const animals: Array<String> = ["pangolin", "aardvark", "echidna", "binturong"];
// const animals: Array<Number | String> = [
//   "pangolin",
//   "aardvark",
//   "echidna",
//   "binturong",
//   1,
// ];

const stringsAndNumbers: [number, string, number, string, number, string] = [
  1,
  "one",
  2,
  "two",
  3,
  "three",
];
const stringsAndNumbers1: Array<String | Number> = [
  1,
  "one",
  2,
  "two",
  3,
  "three",
];
const allMyArrays = [sequence, animals, stringsAndNumbers];

console.log(allMyArrays);
