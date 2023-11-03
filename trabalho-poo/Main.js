const {Contato} = require('./Contato')

let prompt = require('prompt-sync')()

function breaki() {
    return
}

function menu() {
    console.log('Escolha uma das opções abaixo!\n1 - Adicionar contato\n2 - Visualizar a lista de contatos\n3 - Editar contatos\n4 - Excluir contato\n5 - Pesquisar contato');
    let opcao = Number(prompt('Insira o número da opção: '));
    console.log("");

    if (opcao === 1) {
        Contato.adicionarContato();
        console.log('Contato adicionado!');
        console.log(Contato.listaDeContatos)
        console.log("");
        menu();
    }
    else if (opcao === 2) {
        Contato.exibirContatos();
        console.log("");
        menu();
    }
    else if (opcao === 3) {
        let nome = prompt('Insira o nome do contato que você deseja editar: ');
        Contato.editarContato(nome);
        console.log("");
        menu();
    }
    else if (opcao === 4) {
        let nome = prompt('Insira o nome do contato que você deseja excluir: ');
        Contato.excluirContato(nome);
        console.log("");
        menu();
    }
    else if (opcao === 5) {
        let nome = prompt('Insira o nome do contato que você deseja pesquisar: ');
        Contato.pesquisarContato(nome);
        console.log("");
        menu();

    } else {
        breaki()
    }
}
console.log("");
menu();