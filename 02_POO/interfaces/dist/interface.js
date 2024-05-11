"use strict";
// interface IContaBancaria {
//    transferecia(valor: number, contaDestino: IContaBancaria): void
//    receberTransferencia(valor: number): void
// }
class ContaBancaria {
    depositar(valor) {
        this.saldo += valor;
        return this.saldo;
    }
    sacar(valor) {
        this.saldo -= valor;
        return this.saldo;
    }
    constructor(saldo) {
        this.saldo = saldo;
    }
}
const conta = new ContaBancaria(100);
console.log(conta.sacar(20));
