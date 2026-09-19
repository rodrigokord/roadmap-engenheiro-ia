// 1. Capturamos o botão e a secção destino
const meuBotao = document.querySelector(".botao-zen");
const secaoDestino = document.querySelector(".conteudo-jornada");

// 2. O ouvinte aguarda o clique
meuBotao.addEventListener("click", function (evento) {
  // Cancela o comportamento padrão do link
  evento.preventDefault();

  // 3. Muda o texto (o que você já fez com sucesso!)
  meuBotao.innerText = "JORNADA INICIADA...";

  // 4. Faz a tela deslizar suavemente até a secção da cachoeira
  secaoDestino.scrollIntoView({ behavior: "smooth" });
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
