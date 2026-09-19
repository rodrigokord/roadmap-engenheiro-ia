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
