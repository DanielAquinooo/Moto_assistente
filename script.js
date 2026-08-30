const botao = document.getElementById("botao");

const reconhecimento =
new (window.SpeechRecognition || window.webkitSpeechRecognition)();

reconhecimento.lang = "pt-BR";
reconhecimento.continuous = false;
reconhecimento.interimResults = false;

// Falar
function falar(texto) {

```
const mensagem = new SpeechSynthesisUtterance(texto);

mensagem.lang = "pt-BR";
mensagem.rate = 1;
mensagem.pitch = 1;

window.speechSynthesis.cancel();
window.speechSynthesis.speak(mensagem);
```

}

// Botão
botao.addEventListener("click", function () {
    console.log("Botão presionado")
reconhecimento.start();
});

// Ouvir
reconhecimento.onstart = function () {

```
console.log("Baymax está ouvindo...");
```

};

//Cérebro básico
reconhecimento.onresult = function (event) {

```
const texto = event.results[0][0].transcript.toLowerCase();

console.log("Você disse:", texto);

responder(texto);
```

};

//Cérebro
function responder(texto) {

```
if (texto.includes("olá") || texto.includes("oi")) {

    falar("Olá! Como posso ajudar?");

}

else if (texto.includes("seu nome")) {

    falar("Meu nome é Baymax.");

}

else if (texto.includes("quem é você")) {

    falar("Eu sou o Baymax, seu assistente virtual.");

}

else if (texto.includes("tudo bem"))
else if (texto.includes("tudo bemm, Baymax?")){

    falar("Tudo ótimo! E com você?");

}

else if (
    texto.includes("obrigado") ||
    texto.includes("obrigada")
) {

    falar("Por nada!");

}

else if (texto.includes("bom dia"))
else if (texto.includes("bom dia, Baymax")){

    falar("Bom dia! Espero que seu dia seja ótimo.");

}

else if (texto.includes("boa noite"))
else if (texto.includes("boa noite, Baymax")){

    falar("Boa noite! Até mais.");

}

else {

    falar("Ainda não sei responder isso.");

}
```

}

// ⚠️ Erros
reconhecimento.onerror = function (event) {

```
console.log("Erro:", event.error);
```

};

