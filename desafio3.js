const combo = document.querySelector('#combo');
const back = document.querySelector('#formacao-back');
const front = document.querySelector('#formacao-front');
const divFormacao = document.querySelector('#formacao');
const backEnd = document.querySelector('#back') 
const frontEnd = document.querySelector('#front')
const cursoEscolhido = document.querySelector('.escolha')
const c = document.querySelector('.escolha__back-c');
const java = document.querySelector('.escolha__back-java');
const react = document.querySelector('.escolha__front-react')
const vue = document.querySelector('.escolha__front-vue')


function escolha() {
    const indice = combo.selectedIndex;
    let formacao = combo.options[indice].text;
    if (formacao === "Front-End") {
        divFormacao.classList.remove('formacao__visible')
        back.classList.add('back__visible')
        front.classList.remove('front__visible')
    }
    if (formacao === "Back-End") {
        divFormacao.classList.remove('formacao__visible')
        front.classList.add('front__visible')
        back.classList.remove('back__visible')
    }
}

function formacao(){
    const indiceBack = backEnd.selectedIndex;
    let back = backEnd.options[indiceBack].text;    
    const indiceFront = frontEnd.selectedIndex;
    let front = frontEnd.options[indiceFront].text;
    if (front === "React"){
        cursoEscolhido.classList.remove('escolha__visible')
        react.classList.remove('escolha__visible');
        c.classList.add('escolha__visible');
        java.classList.add('escolha__visible')
        vue.classList.add('escolha__visible')
    }    
    if (front === "Vue"){
        cursoEscolhido.classList.remove('escolha__visible')
        react.classList.add('escolha__visible');
        c.classList.add('escolha__visible');
        java.classList.add('escolha__visible')
        vue.classList.remove('escolha__visible')
    }   
    if (back === "C#"){
        cursoEscolhido.classList.remove('escolha__visible')
        react.classList.add('escolha__visible');
        c.classList.remove('escolha__visible');
        java.classList.add('escolha__visible')
        vue.classList.add('escolha__visible')
    }   
    if (back === "Java"){
        cursoEscolhido.classList.remove('escolha__visible')
        react.classList.add('escolha__visible');
        c.classList.add('escolha__visible');
        java.classList.remove('escolha__visible')
        vue.classList.add('escolha__visible')
    }   
}





