// ==========================================
// 1. CAPTURAS DE TELA
// ==========================================
const meuBotao = document.querySelector(".botao-zen");
const secaoDestino = document.querySelector(".conteudo-jornada");
const campoFoco = document.getElementById("input-foco");
const elementoMantra = document.getElementById("mantra-diario");
const textoRespiracao = document.getElementById("texto-respiracao");
const circulo = document.querySelector(".circulo-respiracao");

// ==========================================
// 2. FUNÇÃO DA IA
// ==========================================
async function buscarMantraDaIA(focoDigitado) {
  try {
    const resposta = await fetch("http://127.0.0.1:5000/gerar-mantra", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ foco: focoDigitado }),
    });
    const dados = await resposta.json();
    return dados.mantra;
  } catch (erro) {
    console.error("Erro na comunicação:", erro);
    return "Respire fundo. A paz está no agora.";
  }
}

// ==========================================
// 3. BOTÃO INICIAR (Agora ele apenas desliza a tela)
// ==========================================
meuBotao.addEventListener("click", function (evento) {
  evento.preventDefault();
  secaoDestino.scrollIntoView({ behavior: "smooth" });
});

// ==========================================
// 4. LÓGICA DO CÍRCULO (Agora com IA embutida!)
// ==========================================
const fases = ["Inspire...", "Segure...", "Expire..."];
let indice = 0;
const somRespiracao = new Audio("audios/ondas.mp3");
somRespiracao.loop = true;

let exercicioAtivo = false;
let idRelogio;

// TODO 2: Repare na palavra 'async' aqui. É ela que permite que o círculo espere pela IA!
circulo.addEventListener("click", async function () {
  if (exercicioAtivo === false) {
    exercicioAtivo = true;
    circulo.classList.add("respirando");
    somRespiracao.play();
    textoRespiracao.innerText = fases[0];
    indice = 1;

    campoFoco.classList.add("escondido");

    // --- A MÁGICA ACONTECE AQUI ---
    const dorParaLibertar = campoFoco.value;
    elementoMantra.innerText =
      "O universo está a escutar... a gerar o seu mantra...";

    const mantraMagico = await buscarMantraDaIA(dorParaLibertar);
    elementoMantra.innerText = mantraMagico;
    // ------------------------------

    idRelogio = setInterval(function () {
      textoRespiracao.innerText = fases[indice];
      indice = indice + 1;
      if (indice === 3) {
        indice = 0;
      }
    }, 2000);
  } else {
    exercicioAtivo = false;
    circulo.classList.remove("respirando");
    somRespiracao.pause();
    clearInterval(idRelogio);
    textoRespiracao.innerText = "Pressione para começar";
    indice = 0;

    campoFoco.classList.remove("escondido");
    campoFoco.value = "";
  }
});

// ==========================================
// 5. BOTÕES DE SOM
// ==========================================
const botoesSom = document.querySelectorAll(".btn-som");
botoesSom.forEach(function (botao) {
  botao.addEventListener("click", function () {
    const novoLink = botao.getAttribute("data-som");
    somRespiracao.src = novoLink;
    if (exercicioAtivo === true) {
      somRespiracao.play();
    }
  });
});
