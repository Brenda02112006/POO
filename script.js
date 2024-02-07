// Classe que representa o jogo
class Jogo {
    constructor(palavras, maxTentativas) {
        this.palavras = palavras;
        this.maxTentativas = maxTentativas;
        this.palavraAtual = this.selecionarPalavra();
        this.letrasCorretas = new Set();
        this.letrasIncorretas = new Set();
    }

    // Método para escolher aleatoriamente uma palavra da lista
    selecionarPalavra() {
        const indice = Math.floor(Math.random() * this.palavras.length);
        return this.palavras[indice];
    }

    // Método para processar a tentativa de uma letra
    tentativa(letra) {
        if (this.palavraAtual.includes(letra)) {
            this.letrasCorretas.add(letra);
            return true;
        } else {
            this.letrasIncorretas.add(letra);
            return false;
        }
    }

    // Método para verificar se o jogador ganhou o jogo
    ganhou() {
        return this.palavraAtual.split('').every(letra => this.letrasCorretas.has(letra));
    }

    // Método para verificar se o jogador perdeu o jogo
    perdeu() {
        return this.letrasIncorretas.size >= this.maxTentativas;
    }

    // Método para exibir a palavra atual com as letras adivinhadas
    exibirPalavra() {
        let palavraExibida = '';
        for (const letra of this.palavraAtual) {
            if (this.letrasCorretas.has(letra)) {
                palavraExibida += letra + ' ';
            } else {
                palavraExibida += '_ ';
            }
        }
        return palavraExibida.trim();
    }

    // Método para exibir as letras já tentadas
    exibirLetrasTentadas() {
        return `Letras corretas: ${Array.from(this.letrasCorretas).join(', ')}\nLetras incorretas: ${Array.from(this.letrasIncorretas).join(', ')}`;
    }
}

// Função para iniciar o jogo
function iniciarJogo() {
    const palavras = ['cachorro', 'gato', 'elefante', 'leão', 'tigre' , 'ifal', 'programação' , 'Brasil' , 'Japão'];
    const maxTentativas = 6;
    const jogo = new Jogo(palavras, maxTentativas);

    console.log('Bem-vindo ao Jogo da Adivinhação de Palavras Estilizado!');
    console.log('Adivinhe a palavra:');
    console.log(jogo.exibirPalavra());

    const letraSelect = document.getElementById('letraSelect');
    const resultadoDiv = document.getElementById('resultado');

    function adivinhar() {
        const letraSelecionada = letraSelect.value;
        if (!letraSelecionada) {
            alert('Selecione uma letra antes de adivinhar!');
            return;
        }

        if (jogo.tentativa(letraSelecionada)) {
            resultadoDiv.textContent = 'Letra correta!';
        } else {
            resultadoDiv.textContent = 'Letra incorreta!';
        }

        resultadoDiv.textContent += '\n' + jogo.exibirPalavra() + '\n' + jogo.exibirLetrasTentadas();

        if (jogo.ganhou()) {
            resultadoDiv.textContent += '\nParabéns, você ganhou!';
        } else if (jogo.perdeu()) {
            resultadoDiv.textContent += '\nVocê perdeu! A palavra era: ' + jogo.palavraAtual;
        }
    }

    document.getElementById('adivinharBtn').addEventListener('click', adivinhar);
}

// Iniciar o jogo
iniciarJogo();
