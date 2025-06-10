
let tempo = 20 * 60;
const timer = document.getElementById("timer");
function atualizarContador() {
  const minutos = Math.floor(tempo / 60);
  const segundos = tempo % 60;
  timer.textContent = \`\${minutos.toString().padStart(2, '0')}:\${segundos.toString().padStart(2, '0')}\`;
  tempo--;
  if (tempo < 0) tempo = 20 * 60;
}
setInterval(atualizarContador, 1000);

const nomes = ["Juliana", "Carlos", "Amanda", "Fernanda", "Rafael", "Bruno", "Isabela"];
const cidades = ["São Paulo", "Rio de Janeiro", "Curitiba", "Recife", "Salvador", "Belo Horizonte"];
function mostrarNotificacao() {
  const nome = nomes[Math.floor(Math.random() * nomes.length)];
  const cidade = cidades[Math.floor(Math.random() * cidades.length)];
  const minutos = Math.floor(Math.random() * 10) + 1;
  const msg = \`\${nome} de \${cidade} finalizou a compra há \${minutos} minutos\`;

  const div = document.createElement("div");
  div.className = "notificacao";
  div.textContent = "✔️ " + msg;
  document.getElementById("notificacoes").appendChild(div);

  setTimeout(() => {
    div.remove();
  }, 7000);

  const intervaloAleatorio = Math.random() * 15000 + 10000;
  setTimeout(mostrarNotificacao, intervaloAleatorio);
}
setTimeout(mostrarNotificacao, 5000);
