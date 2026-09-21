// 1. Capturamos o botão e a secção destino
const meuBotao = document.querySelector(".botao-zen");
const secaoDestino = document.querySelector(".conteudo-jornada");

// 1. A nossa lista de frases zen (pode adicionar as que quiser depois!)
const listaMantras = [
  "Foque no agora.",
  "Respire o caos para fora.",
  "A sua paz é a sua prioridade.",
  "Onde a atenção vai, a energia flui.",
];

// 2. Capturamos o local exato onde o texto vai aparecer
const elementoMantra = document.getElementById("mantra-diario");

// 2. O ouvinte aguarda o clique
meuBotao.addEventListener("click", function (evento) {
  evento.preventDefault();
  meuBotao.innerText = "JORNADA INICIADA...";
  secaoDestino.scrollIntoView({ behavior: "smooth" });

  // --- NOVA LÓGICA DO MANTRA AQUI ---

  // 3. A Matemática: Sorteia um número de 0 até o tamanho total da lista
  // A propriedade '.length' conta quantos itens existem na lista automaticamente
  const numeroSorteado = Math.floor(Math.random() * listaMantras.length); // TODO: Escreva 'length'

  // 4. Injeta o mantra na tela usando o número sorteado como chave
  elementoMantra.innerText = listaMantras[numeroSorteado]; // TODO: Coloque a variável 'numeroSorteado' aqui dentro
});

const textoRespiracao = document.getElementById("texto-respiracao");
const circulo = document.querySelector(".circulo-respiracao");

const fases = ["Inspire...", "Segure...", "Expire..."];
let indice = 0;

// 1. Criamos o "Toca-discos" virtual do JavaScript com um som suave de fundo
// Usando um áudio público oficial do Google (ondas batendo nas rochas)
const somRespiracao = new Audio(
  "https://actions.google.com/sounds/v1/water/waves_crashing_on_rock_beach.ogg",
);

somRespiracao.loop = true; // Faz o som repetir infinitamente enquanto o exercício durar

let exercicioAtivo = false;
let idRelogio; // Variável vazia para guardar a "chave" do nosso relógio depois

circulo.addEventListener("click", function () {
  // SE ESTIVER DESLIGADO: Vamos ligar tudo!
  if (exercicioAtivo === false) {
    exercicioAtivo = true;
    circulo.classList.add("respirando");

    // Toca o áudio
    somRespiracao.play();

    textoRespiracao.innerText = fases[0];
    indice = 1;

    // Guardamos o relógio dentro da variável idRelogio
    idRelogio = setInterval(function () {
      textoRespiracao.innerText = fases[indice];
      indice = indice + 1;
      if (indice === 3) {
        indice = 0;
      }
    }, 2000);
  }
  // SE ESTIVER LIGADO: Vamos desligar tudo!
  else {
    exercicioAtivo = false;

    // Remove a classe de animação para o círculo parar de pulsar
    circulo.classList.remove("respirando");

    // Pausa o áudio
    somRespiracao.pause();

    // Quebra o relógio e devolve o texto original
    clearInterval(idRelogio);
    textoRespiracao.innerText = "Pressione para começar";
    indice = 0; // Zera o índice para a próxima vez que começar
  }
});
