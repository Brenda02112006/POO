const palavrasDisponiveis = ["ifal", "programação", "html"];
let palavraSecreta = escolherPalavraAleatoriamente();
let palavraAdivinhada = inicializarPalavraAdivinhada();
let tentativasMaximas = 6;
let tentativasAtuais = 0;
let letrasIncorretas = [];
let letrasTentadas = [];

function escolherPalavraAleatoriamente() {
  const indiceAleatorio = Math.floor(Math.random() * palavrasDisponiveis.length);
  return palavrasDisponiveis[indiceAleatorio].toLowerCase();
}

function inicializarPalavraAdivinhada() {
  return "_".repeat(palavraSecreta.length);
}

function tentarLetra() {
  if (tentativasAtuais >= tentativasMaximas) {
    document.getElementById("feedback").textContent = "Suas chances acabaram. A palavra era: " + palavraSecreta;
    document.getElementById("letter-input").disabled = true;
    return;
  }

  const inputElement = document.getElementById("letter-input");
  const letra = inputElement.value.toLowerCase();

  if (letrasTentadas.includes(letra)) {
    document.getElementById("feedback").textContent = "Você já tentou essa letra. Escolha outra.";
    return;
  }

  letrasTentadas.push(letra);

  if (palavraSecreta.includes(letra)) {
    atualizarPalavraAdivinhada(letra);
    if (!palavraAdivinhada.includes("_")) {
      document.getElementById("feedback").textContent = "Parabéns! Você adivinhou a palavra: " + palavraSecreta;
    } else {
      document.getElementById("feedback").textContent = "Letra correta! Palavra: " + palavraAdivinhada;
    }
  } else {
    tentativasAtuais++;
    letrasIncorretas.push(letra);
    document.getElementById("feedback").textContent = "Letra incorreta. Tentativas restantes: " + (tentativasMaximas - tentativasAtuais);
    document.getElementById("incorrect-letters").textContent = "Letras incorretas: " + letrasIncorretas.join(", ");
  }

  exibirStatusHTML();

  // Limpa o campo de entrada
  inputElement.value = "";
}

function atualizarPalavraAdivinhada(letra) {
  for (let i = 0; i < palavraSecreta.length; i++) {
    if (palavraSecreta[i] === letra) {
      palavraAdivinhada = palavraAdivinhada.substr(0, i) + letra + palavraAdivinhada.substr(i + 1);
    }
  }
}

function exibirStatusHTML() {
  document.getElementById("word-display").textContent = "Palavra: " + palavraAdivinhada;
}
