documet.addEventListener("DOMContentLoaded", function (){
        const botao = document.getElementById("botao");
    const SpeechRecognition =
        window.SpeechRecognition ||
        window.webkitSpeechRecognition;

    if(!SpeechRecognition){

        alert("Seu navegador não suporta reconhecimento de voz.");
        return;
    }

    const reconhecimento = new SpeechRecognition();

            reconhecimento.lang = "pt-BR";
            reconhecimento.continuous = false;
            reconhecimento.interimResults = false;
botao.addEventListener("click", function () {
    console.log("Iniciando microfone...");
    reconhecimento.start();
});
    reconhecimento.onstart = function (){
        console.log("Baymax está ouvindo!");
    };
reconhecimento.onresult = function (event) {
    const texto =
        event.results[0][0].transcript;
    console.log("Você disse:", texto);
    alert("Baymax ouviu:" + texto);
});

reconhecimento.onend = function (){
    console.log("Baymax parou de ouvir.");
});
