// interface
// gerar um type
// destruciton js https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment
// const obj  = { valor: "", contaDestino: {}, contaAtual: {} }
// const { valor, contaDestino, contaAtual } = obj
// para um entendimento melhor de type vs interface 
// https://stackoverflow.com/questions/37233735/interfaces-vs-types-in-typescript
// o porque receber um objeto como parametro na função aqui tem haver com clean code.
interface ITransferencia {
  valor: number
  contaDestino: ContaBancaria,
  contaAtual: ContaBancaria
}

function transferecia({ valor, contaDestino, contaAtual } : { valor: number, contaDestino: ContaBancaria, contaAtual: IContaBancaria}): boolean {
  
 return true
}

// function transferecia({ valor, contaDestino, contaAtual } : ITransferencia): boolean {
//    contaDestino.depositar(valor)
//    contaAtual.sacar(valor)
//    console.log(`Transferencia de ${contaAtual.cliente.codigo} para ${contaDestino.cliente.codigo} `)
//   return true
//  }