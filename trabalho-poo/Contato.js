const prompt = require('prompt-sync')();

class Contato {
    static listaDeContatos = [];
    constructor(nome, telefone, email) {
        this.nome = nome;
        this.telefone = telefone;
        this.email = email;
    }

    info() {
        console.log(`Nome: ${this.nome} - Contato: ${this.telefone} - Email: ${this.email}`)
    }

    static adicionarContato() {
        console.log('Escolha uma das opções abaixo!\n1 - Contato: \n2 - Contato Cliente: \n3 -  Contato Amigo:\n4 - Colega de trabalho:\n');
        let escolha = Number(prompt("selecione uma opção a cima: "))
        let nome = prompt('Insira o nome do novo contato: ');
        let telefone = Number(prompt('Insira o número de telefone do novo contato: '));
        let email = prompt('Insira o email do novo contato: ');
        if (escolha == 1) {
            Contato.listaDeContatos.push(new Contato(nome, telefone, email));
        } else if (escolha == 2) {
            let empresa = prompt(" insira  o nome da empresa: ")
            Contato.listaDeContatos.push(new Cliente(nome, telefone, email, empresa));
        } else if (escolha == 3) {
            let aniversario = prompt(" insira a data do seu aniversário: ")
            Contato.listaDeContatos.push(new Amigo(nome, telefone, email, aniversario));
        } else if (escolha == 4) {
            let departamento = prompt(" insira o departamento o qual pertence : ")
            Contato.listaDeContatos.push(new ColegaDeTrabalho(nome, telefone, email, departamento));

        }

    }

    static exibirContatos() {
        for (let i = 0; i < Contato.listaDeContatos.length; i++) {
            Contato.listaDeContatos[i].info();

        }
    }
    static editarContato(nome) {
      
        let i = Contato.listaDeContatos.findIndex((contato) => contato.nome === nome);
        if (i !== -1) {
            Contato.listaDeContatos.splice(i, 1);
            Contato.adicionarContato()
            
        }
        else {
            console.log('Contato inexistente!')
        }

    }
    static excluirContato(nome) {
        let i = Contato.listaDeContatos.findIndex((contato) => contato.nome === nome);
        if (i !== -1) {
            console.log(`O contato ${Contato.listaDeContatos[i].nome} foi removido da agenda.`)
            Contato.listaDeContatos.splice(i, 1);
        }
        else {
            console.log('Contato inexistente!')
        }
    }
    static pesquisarContato(nome) {
        let i = Contato.listaDeContatos.findIndex((contato) => contato.nome === nome);
        if (i !== -1) {
            Contato.listaDeContatos[i].info()
        }
        else {
            console.log('Contato inexistente!')
        }
    }
}

exports.Contato = Contato;


