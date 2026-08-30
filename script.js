document.addEventListener("DOMContentLoaded", function () {

    const botao = document.getElementById("botao");

    const SpeechRecognition =
        window.SpeechRecognition ||
        window.webkitSpeechRecognition;

    if (!SpeechRecognition) {
        alert("Seu navegador não suporta reconhecimento de voz.");
        return;
    }

    const reconhecimento = new SpeechRecognition();

    reconhecimento.lang = "pt-BR";
    reconhecimento.continuous = false;
    reconhecimento.interimResults = false;

    // BOTÃO
    botao.addEventListener("click", function () {

        console.log("🎤 Iniciando reconhecimento...");

        reconhecimento.start();

    });

    // COMEÇOU A OUVIR
    reconhecimento.onstart = function () {

        console.log("🎤 Baymax está ouvindo...");

    };

    // RECEBEU A VOZ
    reconhecimento.onresult = function (event) {

        const texto = event.results[0][0].transcript;

        console.log("🗣️ Você disse:", texto);

        alert("Baymax ouviu: " + texto);

    };

    // ERRO
    reconhecimento.onerror = function (event) {

        console.log("❌ Erro:", event.error);

        alert("Erro no reconhecimento: " + event.error);

    };

    // TERMINOU DE OUVIR
    reconhecimento.onend = function () {

        console.log("🎤 Baymax parou de ouvir.");

    };

});
