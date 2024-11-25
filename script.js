document.addEventListener("DOMContentLoaded", function() {
    const typingEffect = document.getElementById("typing-effect");
    const text = "Olá, eu sou Fernando Cardoso";
    let index = 0;

    function type() {
        if (index < text.length) {
            typingEffect.textContent += text.charAt(index);
            index++;
            setTimeout(type, 100);
        }
    }

    type();
});
