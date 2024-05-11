/**
 * A interface(interface) permite que a gente defina um "contrato" (regras)
 * de (comportamento e atributos) quando uma classe implementa
 * A interface também pode ser utilizada para tipar entrada de função ou saida de função
 * nesse caso, o mais comun vai ser para receber um objeto ou uma instancia de classe.
 * Para um entendimento melhor discurssão no stackoverflow
 * https://medium.com/xp-inc/typescript-interfaces-9ef875cf046b
 * https://cynoteck.com/blog-post/interfaces-in-typescript/ (uso avancado)
 */


interface IContaBancaria {
  saldo: number
  depositar(valor: number): number
  sacar(valor: number): number
}

/**
 * Assim como acontece na heranca com classes, também é possivel extender uma inteface
 */

interface IContaBancariaPJ extends ContaBancaria {
  emitirNotaFiscal(): void
}

/** 
 * Ao extender é como se nossa interface ficasse dessa forma
 * adicionamos o comportamento novo emitirNotaFiscal e 
 * ao mesmo tempo herdamos o da interface principal
interface IContaBancariaPJ extends ContaBancaria {
  saldo: number
  depositar(valor: number): number
  sacar(valor: number): number
  emitirNotaFiscal(): void
}
para mais informacoes https://www.typescriptlang.org/docs/handbook/interfaces.html


*/
