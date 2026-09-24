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
// 2. CÉREBRO DA IA (A PONTE COM O PYTHON)
// ==========================================
// Função 'async' criada para bater na porta do servidor Flask sem travar o site.
async function buscarMantraDaIA(focoDigitado) {
  try {
    //  O 'fetch' faz a chamada ao nosso backend local (porta 5000).
    const resposta = await fetch("http://127.0.0.1:5000/gerar-mantra", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      //  Empacotamos a dor do utilizador num formato JSON para envio.
      body: JSON.stringify({ foco: focoDigitado }),
    });

    // Desempacotamos a resposta do Python.
    const dados = await resposta.json();
    return dados.mantra;
  } catch (erro) {
    console.error("Falha na comunicação com o cérebro:", erro);
    //  Rede de segurança. Se o servidor Python cair, devolvemos uma frase fixa.
    return "Respire fundo. A paz está no agora.";
  }
}

// ==========================================
// 3. BOTÃO INICIAR & INJEÇÃO DO MANTRA
// ==========================================
//  O botão ganha 'async' para poder esperar (await) pela resposta da IA.
meuBotao.addEventListener("click", async function (evento) {
  evento.preventDefault();
  meuBotao.innerText = "JORNADA INICIADA...";
  secaoDestino.scrollIntoView({ behavior: "smooth" });

  // Captura o texto exato que o utilizador quer libertar.
  const dorParaLibertar = campoFoco.value;

  //  Injeta uma mensagem de loading elegante enquanto o Python processa.
  elementoMantra.innerText =
    "O universo está a escutar... a gerar o seu mantra...";

  // Chamama IA. O código 'pausa' aqui até o Python devolver o texto.
  const mantraMagico = await buscarMantraDaIA(dorParaLibertar);

  // Substituí o loading pelo mantra final gerado pelo Gemini!
  elementoMantra.innerText = mantraMagico;
});

// ==========================================
// 4. LÓGICA DO CÍRCULO DE RESPIRAÇÃO
// ==========================================
const fases = ["Inspire...", "Segure...", "Expire..."];
let indice = 0;

const somRespiracao = new Audio("audios/ondas.mp3");
somRespiracao.loop = true;

let exercicioAtivo = false;
let idRelogio;

circulo.addEventListener("click", function () {
  if (exercicioAtivo === false) {
    // LIGA O EXERCÍCIO
    exercicioAtivo = true;
    circulo.classList.add("respirando");
    somRespiracao.play();
    textoRespiracao.innerText = fases[0];
    indice = 1;

    // Esconde o input para o ecrã ficar limpo durante a respiração.
    campoFoco.classList.add("escondido");

    idRelogio = setInterval(function () {
      textoRespiracao.innerText = fases[indice];
      indice = indice + 1;
      if (indice === 3) {
        indice = 0;
      }
    }, 2000);
  } else {
    // DESLIGA O EXERCÍCIO
    exercicioAtivo = false;
    circulo.classList.remove("respirando");
    somRespiracao.pause();
    clearInterval(idRelogio);
    textoRespiracao.innerText = "Pressione para começar";
    indice = 0;

    // Traz o input de volta e apaga a dor antiga (sensação de libertação).
    campoFoco.classList.remove("escondido");
    campoFoco.value = "";
  }
});

// ==========================================
// 5. LÓGICA DOS BOTÕES DE SOM
// ==========================================
const botoesSom = document.querySelectorAll(".btn-som");

botoesSom.forEach(function (botao) {
  botao.addEventListener("click", function () {
    const novoLink = botao.getAttribute("data-som");
    console.log("O botão clicado tem o som:", novoLink);

    somRespiracao.src = novoLink;

    if (exercicioAtivo === true) {
      somRespiracao.play();
    }
  });
});
