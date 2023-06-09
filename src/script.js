function showSobreMim() {
    document.getElementById("card-certificados").style.display = 'none'
    document.getElementById("card-skills").style.display = 'none'
    document.getElementById("card-projetos").style.display = 'none'
    document.getElementById("card-sobre-mim").classList.add('.index-front')
    document.querySelector(".container-front").classList.remove('index-front')
}

function showSkills() {
    document.getElementById("card-certificados").style.display = 'none'
    document.getElementById("card-sobre-mim").style.display = 'none'
    document.getElementById("card-projetos").style.display = 'none'
    document.getElementById("card-skills").classList.add('.index-front')
    document.querySelector(".container-front").classList.remove('index-front')
}

function showCertificados() {
    document.getElementById("card-sobre-mim").style.display = 'none'
    document.getElementById("card-skills").style.display = 'none'
    document.getElementById("card-projetos").style.display = 'none'
    document.getElementById("card-certificados").classList.add('.index-front')
    document.querySelector(".container-front").classList.remove('index-front')
}

function showProjetos() {
    document.getElementById("card-certificados").style.display = 'none'
    document.getElementById("card-skills").style.display = 'none'
    document.getElementById("card-sobre-mim").style.display = 'none'
    document.getElementById("card-projetos").classList.add('.index-front')
    document.querySelector(".container-front").classList.remove('index-front')
}

function exitCards() {
    document.getElementById("card-certificados").style.removeProperty('display')
    document.getElementById("card-skills").style.removeProperty('display')
    document.getElementById("card-projetos").style.removeProperty('display')
    document.getElementById("card-sobre-mim").style.removeProperty('display')
    document.querySelector(".container-front").classList.add('index-front')
}