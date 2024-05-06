class Usuario {
  // atributos
  nome: string;
  conta: string;
  saldo: number;

  // construtor
  constructor(nome: string, conta: string, saldo: number) {
    this.nome = nome;
    // this.conta = `001 ${conta}`;
    this.conta = conta;
    this.saldo = saldo;
  }

  //métodos
  deposito(valor: number): void {
    this.saldo += valor;
  }

  saque(valor: number): void {
    this.saldo -= valor;
  }

  extrato(): string {
    return `A usuária ${this.nome} dona da conta ${this.conta} tem o saldo de R$ ${this.saldo}`;
  }
}

// objeto
const usuario1 = new Usuario("Ana", "9183-9", 100);
const usuario2 = new Usuario("Adriana", "9113-9", 0);
const usuario3 = new Usuario("Bea", "93-9", 50000);
const usuario4 = new Usuario("Lis", "1183-9", 20);
const usuario5 = new Usuario("Gabriel", "91888-9", 350);
const usuario6 = new Usuario("Gabriel", "91888-9", 350);

usuario1.deposito(200);
usuario1.deposito(200);
console.log(usuario1);
console.log(usuario2.extrato());

usuario2.saque(80);

console.log(usuario2);
usuario3.deposito(10000);

console.log(usuario3);

usuario1.saque(150);
// console.log(usuario1);
