const {Contato} = require('./Contato')
class ColegaDeTrabalho extends Contato {
    constructor(nome, telefone, email, departamento) {
        super(nome, telefone, email)
        this.departamento = departamento;
    }

    info() {
        console.log(`Nome: ${this.nome} - Contato: ${this.telefone} - Email: ${this.email} - Departamento: ${this.departamento}`)
    }


}

