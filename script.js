let botao = document.getElementById("mensagem");

function mostrarMensagem() {
  document.getElementById("mostrarmensagem").textContent = "Você é mais forte do que imagina. Continue!";
}

botao.addEventListener("click", mostrarMensagem);
