/**
 * quando uma classe utiliza o `implementes` ela passa a implementar 
 * o comportamento (tipagem) que está definido na interface
 * mas não impede que a classe possa ter os seus proprios métodos
 */

class ContaBancaria implements IContaBancaria {
  saldo: number
  numeroDaConta: string;
  cliente: Cliente
  depositar(valor: number): number {
     this.saldo += valor;
    return this.saldo
  }
  sacar(valor: number): number { // Ou temos saldo suficiente e realizado o saque ou temos saldo insuficiente
   this.saldo -= valor
   return this.saldo
  }
 
  constructor(saldo: number, numeroDaConta: string, cliente: Cliente) {
   this.saldo = saldo
   this.numeroDaConta = numeroDaConta
   this.cliente = cliente
  }
 }
 const cliente = new Cliente(123, "rua 1")
 const conta = new ContaBancaria(100, "123", cliente)
 
 console.log(conta.sacar(20))