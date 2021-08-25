function clicou() {
    // alert("obrigado por clicar aqui")
    document.getElementById("agradecimento").innerHTML = "obrigado por clicar!"
}

function google() {
    // ABRE EM NOVA ABA
    window.open("https://google.com/")
    // ABRE NA MESMA ABA
    // window.location.href = "https://google.com/"
}

function trocar(elemento) {
    // TROCA O TEXTO AO PASSAR O MOUSE EM CIMA
    // document.getElementById("mousemove").innerHTML = "obrigado por passar o mouse"
    elemento.innerHTML = "obrigado por passar o mouse :)"
}

function voltar(elemento) {
    // TROCA O TEXTO AO PASSAR O MOUSE EM CIMA
    // document.getElementById("mousemove").innerHTML = "passe o mouse aqui"
    elemento.innerHTML = "passe o mouse aqui"
}

function load() {
    alert("página carregada")
}

function funcaoChange(elemento) {
    console.log(elemento.value)
}
