const {Contato} = require('./Contato')
class Cliente extends Contato {
    constructor(nome, telefone, email, empresa) {
        super(nome, telefone, email);
        this.empresa = empresa;

    }

    info() {
        console.log(`Nome: ${this.nome} - Contato: ${this.telefone} - Email: ${this.email} - Empresa: ${this.empresa}`)
    }

}

