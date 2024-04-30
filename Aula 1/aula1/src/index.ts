let nome1: string; // o tipo foi atribuido
let nome: string = "Ana"; // o tipo foi inferido
let idade = 12;

// nome = []; // não é string
// nome = {}; // não é string
// nome = true; // não é string
nome = "lisandra";

// console.log("opa o/");

// any
let doTipoAny;
doTipoAny = 1;
doTipoAny = "sdkn";
doTipoAny = {};
doTipoAny = [];

//unknown
// let doTipoUnknown: unknown;
// doTipoUnknown = [];
// doTipoUnknown = "ads";
function processValue(value: unknown) {
  if (typeof value === "string") {
    return value.toUpperCase();
  } else if (typeof value === "number") {
    return value * 2;
  }
}

// console.log(processValue(2));
// console.log(processValue("Ana"));

//array
type mixType = Array<string | number>;
const nomeDeProdutos1 = ["camisa", "calça", "saia", 7];
// const nomeDeProdutos2: string[] | number[] = ["camisa", "calça", "saia", 7];
const nomeDeProdutos3: string[] = ["camisa", "calça", "saia"];
const nomeDeProdutos4: mixType = ["camisa", "calça", "saia", 7];

// const obj = { nome: "Lis", idade: 30, eCasada: true };
//tuple
// type objType = [string, number, boolean];

type objType = [string, number, boolean];
const tuple1: objType = ["Lis", 30, true];
const tuple2: objType = ["Lis", 12, true];
