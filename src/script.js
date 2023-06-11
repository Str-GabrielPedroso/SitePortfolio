function show() {
    this.document.getElementById("card").style.removeProperty('display')
    document.querySelector(".container-front").classList.remove('index-front')
}

function exitCards() {
    this.document.getElementById("card").style.display = "none"
    document.querySelector(".container-front").classList.add('index-front')
}