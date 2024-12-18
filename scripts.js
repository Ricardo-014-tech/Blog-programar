* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Space Grotesk', sans-serif;
}

/* Corpo da página */
body {
    background: #0a0a0a;
    color: #e0e0e0;
    font-size: 16px;
    line-height: 1.6;
}

/* Cabeçalho */
header {
    background: linear-gradient(45deg, #00bcd4, #4caf50);
    color: white;
    padding: 20px 0;
    text-align: center;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.5);
}

header .logo h1 {
    font-size: 2.5rem;
    letter-spacing: 2px;
}

/* Seções */
section {
    margin: 40px auto;
    padding: 20px;
    max-width: 1100px;
    border-radius: 10px;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
    transition: transform 0.5s ease, opacity 0.5s ease;
    opacity: 0;
    transform: translateY(50px);
}

section h2 {
    font-size: 2rem;
    color: #00bcd4;
    text-transform: uppercase;
    letter-spacing: 1px;
    margin-bottom: 20px;
}

section p {
    font-size: 1.1rem;
    color: #b0b0b0;
}

section ul {
    margin-top: 20px;
}

section ul li {
    margin-bottom: 10px;
}

/* Efeito de transição */
section.visible {
    opacity: 1;
    transform: translateY(0);
}

/* Botões */
button {
    background-color: #00bcd4;
    color: white;
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    font-size: 1rem;
    transition: background-color 0.3s ease;
}

button:hover {
    background-color: #007c91;
}

/* Pix Info */
.pix-info {
    margin-top: 20px;
    padding: 20px;
    background-color: #333;
    border-radius: 8px;
    display: flex;
    flex-direction: column;
    align-items: center;
}

.pix-info h3 {
    font-size: 1.2rem;
    color: #e0e0e0;
}

.pix-key {
    font-weight: bold;
    color: #00bcd4;
}

/* Testimonials */
.testimonial {
    background: #1a1a1a;
    margin-bottom: 20px;
    padding: 15px;
    border-radius: 8px;
}

.testimonial p {
    font-size: 1.1rem;
}

.testimonial span {
    font-size: 1rem;
    color: #00bcd4;
}

/* Social Icons */
.social-icons a {
    color: #00bcd4;
    margin-right: 20px;
    font-size: 1.5rem;
    text-decoration: none;
    transition: color 0.3s ease;
}

.social-icons a:hover {
    color: #4caf50;
}

/* Formulário */
form {
    display: flex;
    flex-direction: column;
    gap: 15px;
}

form input, form textarea {
    padding: 10px;
    background: #1a1a1a;
    border: 1px solid #333;
    border-radius: 5px;
    color: white;
}

form button {
    align-self: flex-start;
}

/* Botão Voltar ao Topo */
.scroll-to-top {
    position: fixed;
    bottom: 30px;
    right: 30px;
    background-color: #00bcd4;
    color: white;
    padding: 10px 20px;
    border-radius: 50%;
    font-size: 2rem;
    border: none;
    cursor: pointer;
    transition: background-color 0.3s ease;
    display: none; /* Inicialmente oculto */
}

.scroll-to-top:hover {
    background-color: #007c91;
}

/* Responsividade */
@media screen and (max-width: 768px) {
    header .logo h1 {
        font-size: 2rem;
    }

    section {
        padding: 15px;
    }

    section h2 {
        font-size: 1.5rem;
    }

    form input, form textarea {
        padding: 8px;
    }

    form button {
        padding: 8px 16px;
    }

    .social-icons a {
        font-size: 1.3rem;
    }
        }
