document.addEventListener("DOMContentLoaded", function () {
    // Carregar a configuração do modo do localStorage
    const savedMode = localStorage.getItem('mode');
    if (savedMode === 'night') {
        document.body.classList.add('night-mode');
    }

    // Mostrar/Ocultar o botão "Voltar ao Topo"
    const scrollToTopBtn = document.querySelector(".scroll-to-top");
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

    // Função para alternar entre modo claro e modo noturno
    const modeToggleButton = document.querySelector('.toggle-mode');
    if (modeToggleButton) {
        modeToggleButton.addEventListener('click', function () {
            document.body.classList.toggle('night-mode');
            const currentMode = document.body.classList.contains('night-mode') ? 'night' : 'light';
            localStorage.setItem('mode', currentMode);
        });
    }
});
