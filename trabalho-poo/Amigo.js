const {Contato} = require('./Contato')
class Amigo extends Contato {
    constructor(nome, telefone, email, dataDeAniversario) {
        super(nome, telefone, email)
        this.dataDeAniversario = dataDeAniversario;
    }

    info() {
        console.log(`Nome: ${this.nome} - Contato: ${this.telefone} - Email: ${this.email} - dataDeAniversario: ${this.dataDeAniversario}`)
    }

}
