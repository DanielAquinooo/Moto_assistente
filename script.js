const SpeechRecognition =
window.SpeechRecognition || window.webkitSpeechRecognition;

const reconhecimento = new SpeechRecognition();

reconhecimento.lang = "pt-BR";
reconhecimento.continuous = false;
reconhecimento.interimResults = false;

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

function ouvir() {

```
if (!SpeechRecognition) {
    falar("Desculpe, seu navegador não suporta reconhecimento de voz.");
    return;
}

falar("Pode falar.");

setTimeout(() => {
    reconhecimento.start();
}, 1000);
```

}

reconhecimento.onresult = function(event) {

```
const texto = event.results[0][0].transcript.toLowerCase();

console.log("Você disse:", texto);

responder(texto);
```

};

reconhecimento.onerror = function(event) {

```
console.log("Erro:", event.error);

falar("Não consegui entender. Pode tentar novamente?");
```

};

function responder(texto) {

```
if (texto.includes("olá") || texto.includes("oi")) {

    falar("Olá! Como você está?");

} else if (texto.includes("seu nome")) {

    falar("Meu nome é Moto.");

} else if (texto.includes("quem é você")) {

    falar("Eu sou o Moto, seu assistente virtual.");

} else if (texto.includes("tudo bem")) {

    falar("Tudo ótimo! E com você?");

} else if (texto.includes("obrigado") || texto.includes("obrigada")) {

    falar("Por nada!");

} else {

    falar("Ainda não sei responder isso, mas estou aprendendo.");
}
```

}
