// Criação da classe que representa um contato
class Contato {
    constructor(nome, telefone, email) {
      this.nome = nome;
      this.telefone = telefone;
      this.email = email;
    }
  
    // Um método -  que mostra  os detalhes do contato
    mostrarDetalhes() {
      console.log(`Nome: ${this.nome}`);
      console.log(`Telefone: ${this.telefone}`);
      console.log(`E-mail: ${this.email}`);
      console.log('---');
    }
  }
  
  // Classe - agenda de contatos 
  class AgendaDeContatos {
    constructor() {
      this.contatos = [];
    }
  
    // Método - adiciona o novo contato à lista criada
    adicionarContato(contato) {
      this.contatos.push(contato);
    }
  
    // Método - lista todos os contatos
    listarContatos() {
      this.contatos.forEach((contato, index) => {
        console.log(`Contato ${index + 1}:`);
        contato.mostrarDetalhes();
      });
    }
  
    // Método -  edita um contato existente
    editarContato(index, novoNome, novoTelefone, novoEmail) {
      if (index >= 0 && index < this.contatos.length) {
        const contato = this.contatos[index];
        contato.nome = novoNome;
        contato.telefone = novoTelefone;
        contato.email = novoEmail;
        console.log('O Contato foi alterado perfeitamente!!');
      } else {
        console.log('Marcação do contato incorreta...');
      }
    }
  
    // Método - exclue um contato que está inserido na lista
    excluirContato(index) {
      if (index >= 0 && index < this.contatos.length) {
        this.contatos.splice(index, 1);
        console.log('Contato foi alterado perfeitamente!');
      } else {
        console.log('Marcação do contato incorreta...');
      }
    }
  
    // Método -  pesquisa contatos por nome
    pesquisarContatoPorNome(nome) {
      const resultados = this.contatos.filter(contato => contato.nome.toLowerCase() === nome.toLowerCase());
      if (resultados.length > 0) {
        console.log('Abaixo, os contatos encontrados:');
        resultados.forEach(contato => contato.mostrarDetalhes());
      } else {
        console.log('Não existe contato com este nome, reveja-o.');
      }
    }
  }
  
  // executando com um exemplo:
  const agenda = new AgendaDeContatos();
  
  agenda.adicionarContato(new Contato('brenda', '(82) 98851-4455', 'brenda@email.com'));
  agenda.adicionarContato(new Contato('lybia', '(82) 99178-3075', 'lybia@email.com'));
  
  console.log('Lista de contatos:');
  agenda.listarContatos();
  
  agenda.editarContato(0, 'Brenda Marcele', '(82) 98222-2598', 'brenda.marcele@email.com');
  
  console.log('Listar contatos após edição realizada:');
  agenda.listarContatos();
  
  agenda.excluirContato(1);
  
  
  console.log('Listar contatos após exclusão:');
  agenda.listarContatos();
  
  // exemplo de contato não inserido na lista:
  agenda.pesquisarContatoPorNome('Yngrid Paixão');
