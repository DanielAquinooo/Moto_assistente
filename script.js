document.addEventListener("DOMContentLoaded", function (){
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

try {
        recohecimento.start();
} catch (erro){
        console.log("ERRO AO INICIAR.", erro);
    alert("Erro ao iniciar o microfone:" + erro.mensagem);
}
});
        
    reconhecimento.onstart = function (){
        console.log("Baymax está ouvindo!");
            alert("Estou ouvindo.");
    };
reconhecimento.onresult = function (event) {
    const texto =
        event.results[0][0].transcript;
    console.log("Você disse:", texto);
    alert("Baymax ouviu:" + texto);
});

reconhecimento.onend = function (){
    console.log("Baymax parou de ouvir.");
};
});
