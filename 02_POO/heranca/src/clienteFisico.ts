class ClienteFisico extends Cliente {
    nome: string;
    cpf: string;

    constructor(nome: string, cpf: string, codigo: number, endereco: string) {
        super(codigo, endereco)
        this.nome = nome
        this.cpf = cpf
    }

    // posso sobrescrever (ou não)
    // localizarEndereco(): string {
    //     return this.endereco;
    // }

    validarCPF() {
        if(this.cpf.length === 11) {
            return "CPF validado com sucesso."
        }

        return "CPF inválido."
    }

}

const clienteFisico = new ClienteFisico("Gabriel", "12345678911", 12, "Rua dos Touros")
console.log(clienteFisico.localizarEndereco())
console.log(clienteFisico.validarCPF());