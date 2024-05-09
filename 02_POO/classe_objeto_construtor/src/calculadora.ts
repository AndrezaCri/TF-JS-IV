class Calculadora {
  // numero1: number;
  // numero2: number;
  maiorNumero: number;
  menorNumero: number;

  // constructor(numero1: number, numero2: number) {
  //   this.numero1 = numero1;
  //   this.numero2 = numero2;
  // }
  constructor(numero1: number, numero2: number) {
    this.maiorNumero = numero1 > numero2 ? numero1 : numero2;
    this.menorNumero = this.maiorNumero === numero1 ? numero2 : numero1;
    // this.maiorNumero = numero2 >= numero1 ? numero2 : numero1;
  }

  soma() {
    return this.maiorNumero + this.menorNumero;
    // return this.numero1 + this.numero2;
  }
  subtracao() {
    return this.maiorNumero - this.menorNumero;
    // return this.numero1 - this.numero2;
  }
  multiplicacao() {
    return this.maiorNumero * this.menorNumero;
    // return this.numero1 - this.numero2;
  }
  divisao() {
    // if (this.numero1 === 0 || this.numero2 === 0) {
    // throw new Error("Não é possivel realizar divisão por zero");
    //}
    const contemZero = [this.maiorNumero, this.menorNumero].includes(0);
    if (contemZero) {
      return "Não é possivel realizar divisão por zero";
    }

    return this.maiorNumero / this.menorNumero;

    // if (this.maiorNumero > this.menorNumero) {
    //   return this.maiorNumero / this.maiorNumero;
    // }

    // return this.menorNumero / this.maiorNumero;
  }
}
const calc = new Calculadora(1000, 1000);
console.log(calc.divisao());
