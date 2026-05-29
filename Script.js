// Mensagem do botão principal
function mostrarMensagem() {
  alert(
    "Os carros elétricos ajudam a reduzir a poluição e representam o futuro da mobilidade sustentável!"
  );
}

// Efeito ao clicar nos cards
const cards = document.querySelectorAll(".card");

cards.forEach((card) => {
  card.addEventListener("click", () => {
    card.style.backgroundColor = "#00c853";
    card.style.color = "white";

    setTimeout(() => {
      card.style.backgroundColor = "#161b22";
    }, 800);
  });
});

// Texto dinâmico no título
const titulo = document.querySelector("header h1");

titulo.addEventListener("mouseover", () => {
  titulo.innerText = "⚡ Fórmula E Sustentável ⚡";
});

titulo.addEventListener("mouseout", () => {
  titulo.innerText = "Fórmula E & Meio Ambiente";
});

// Scroll suave no menu
const links = document.querySelectorAll("nav a");

links.forEach((link) => {
  link.addEventListener("click", function (e) {
    e.preventDefault();

    const id = this.getAttribute("href");
    const secao = document.querySelector(id);

    secao.scrollIntoView({
      behavior: "smooth"
    });
  });
});

// Mensagem ao carregar o site
window.onload = function () {
  console.log("Site Fórmula E carregado com sucesso!");
};
