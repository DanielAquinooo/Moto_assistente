const botao = document.getElementById("botao");

const SpeechRecognition =
    window.SpeechRecognition || window.webkitSpeechRecognition;

if (!SpeechRecognition) {

    botao.addEventListener("click", function () {
        alert("Seu navegador não suporta reconhecimento de voz.");
    });

} else {

    const reconhecimento = new SpeechRecognition();

    reconhecimento.lang = "pt-BR";
    reconhecimento.continuous = false;
    reconhecimento.interimResults = false;

    botao.addEventListener("click", function () {

        reconhecimento.start();

    });

    reconhecimento.onstart = function () {

        console.log("🎤 Microfone ativado!");

    };

    reconhecimento.onresult = function (event) {

        const texto = event.results[0][0].transcript;

        console.log("Você disse:", texto);

        alert("Você disse: " + texto);

    };

    reconhecimento.onerror = function (event) {

        console.log("Erro:", event.error);

        alert("Erro no microfone: " + event.error);

    };
}
