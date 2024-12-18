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