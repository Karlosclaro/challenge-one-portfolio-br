document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('.formcontato__form');
    
    form.addEventListener('submit', function(event) {
        event.preventDefault();
        
        const nome = document.getElementById('nome').value.trim();
        const email = document.getElementById('email').value.trim();
        const assunto = document.getElementById('assunto').value.trim();
        const mensagem = document.getElementById('mensagem').value.trim();
        
        if (nome === '' || email === '' || assunto === '' || mensagem === '') {
            alert('Por favor, preencha todos os campos do formulário.');
        } else if (!validateEmail(email)) {
            alert('Por favor, insira um endereço de e-mail válido.');
        } else if (!validateLetters(nome)) {
            alert('Por favor, insira somente letras no campo nome.');
        } else {
            // Aqui você pode adicionar a lógica para enviar o formulário
            alert('Formulário enviado com sucesso!');
            form.reset();
        }
    });
    
    function validateEmail(email) {
        const re = /\S+@\S+\.\S+/;
        return re.test(email);
    }

    function validateLetters(text) {
        const re = /^[a-zA-Z\s]*$/;
        return re.test(text);
    }
});