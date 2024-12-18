// Efeito de scroll para mostrar as seções quando aparecerem na tela
document.addEventListener("DOMContentLoaded", function () {
    const sections = document.querySelectorAll("section");
    const options = {
        threshold: 0.2
    };

    const observer = new IntersectionObserver(function (entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
            }
        });
    }, options);

    sections.forEach(section => {
        observer.observe(section);
    });

    // Adicionando o efeito para o botão "Voltar ao Topo"
    const scrollToTopBtn = document.createElement("button");
    scrollToTopBtn.classList.add("scroll-to-top");
    scrollToTopBtn.textContent = "↑";
    document.body.appendChild(scrollToTopBtn);

    // Mostrar/Ocultar o botão "Voltar ao Topo"
    window.addEventListener("scroll", function () {
        if (window.scrollY > 200) {
            scrollToTopBtn.style.display = "block"; // Mostrar o botão
        } else {
            scrollToTopBtn.style.display = "none"; // Ocultar o botão
        }
    });

    // Função para rolar para o topo
    scrollToTopBtn.addEventListener("click", function () {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });
});

// Função para copiar a chave Pix
function copyPixKey() {
    const pixKey = document.querySelector(".pix-key").textContent;
    navigator.clipboard.writeText(pixKey).then(() => {
        alert("Chave Pix copiada para a área de transferência!");
    }).catch(err => {
        alert("Erro ao copiar a chave Pix.");
    });
}



