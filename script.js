const SpeechRecognition =
window.SpeechRecognition || window.webkitSpeechRecognition;

const botao = document.getElementById("botao");

function falar(texto) {
const mensagem = new SpeechSynthesisUtterance(texto);

```
mensagem.lang = "pt-BR";
mensagem.rate = 1;
mensagem.pitch = 1;

window.speechSynthesis.cancel();
window.speechSynthesis.speak(mensagem);
```

}

if (!SpeechRecognition) {

```
botao.addEventListener("click", function () {
    falar("Seu navegador não suporta reconhecimento de voz.");
});
```

} else {

```
const reconhecimento = new SpeechRecognition();

reconhecimento.lang = "pt-BR";
reconhecimento.continuous = false;
reconhecimento.interimResults = false;

botao.addEventListener("click", function () {

    falar("Pode falar.");

    setTimeout(function () {
        reconhecimento.start();
    }, 1000);

});

reconhecimento.onstart = function () {
    console.log("Microfone ligado!");
};

reconhecimento.onresult = function (event) {

    const texto = event.results[0][0].transcript;

    console.log("Você disse:", texto);

    falar("Você disse " + texto);
};

reconhecimento.onerror = function (event) {

    console.log("Erro:", event.error);

    if (event.error === "not-allowed") {
        falar("O acesso ao microfone foi bloqueado.");
    } else {
        falar("Não consegui entender. Tente novamente.");
    }
};
```

}

