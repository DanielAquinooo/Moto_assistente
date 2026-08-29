const botao = document.getElementById("botao");

botao.addEventListener("click", function () {

    if ("webkitSpeechRecognition" in window) {

        alert("RECONHECIMENTO DE VOZ DISPONÍVEL!");

    } else if ("SpeechRecognition" in window) {

        alert("RECONHECIMENTO DE VOZ DISPONÍVEL!");

    } else {

        alert("RECONHECIMENTO DE VOZ NÃO DISPONÍVEL!");

    }

});
