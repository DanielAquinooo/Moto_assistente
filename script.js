const botao = document.getElementById("botao");

const reconhecimento =
    new (window.SpeechRecognition || window.webkitSpeechRecognition)();

reconhecimento.lang = "pt-BR";
reconhecimento.continuous = false;
reconhecimento.interimResults = false;

botao.addEventListener("click", function () {

    reconhecimento.start();

});

reconhecimento.onstart = function () {

    console.log("🎤 Moto está ouvindo...");

};

reconhecimento.onresult = function (event) {

    const texto = event.results[0][0].transcript;

    console.log("Você disse:", texto);

    alert("Moto ouviu: " + texto);

};

reconhecimento.onerror = function (event) {

    console.log("Erro:", event.error);

};
