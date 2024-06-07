var textoPrincipal1 = document.getElementById("texto-principal-1")
var textoPrincipal2 = document.getElementById("texto-principal-2")
var textoPrincipal3 = document.getElementById("texto-principal-3")
var caixaCabelo = document.getElementById("cabelo")
var caixaBarba = document.getElementById("barba")
var caixaCombo = document.getElementById("combo")
var numeroAleatorio = parseInt(Math.random() * (4 - 1) + 1)

const observerimg = new IntersectionObserver(entries =>{
    console.log(entries)
    Array.from(entries).forEach(entry => {
        if (entry.intersectionRatio >=1){
            entry.target.classList.add("animacao-1")
            entry.target.classList.remove("desaparecer")
        }
    });
}, {threshold:1.0})

const observerimgdireito = new IntersectionObserver(entries =>{
     Array.from(entries).forEach(entry => {
        if (entry.intersectionRatio >=1){
            entry.target.classList.add("animacao-2")
        }
    })
} , {
    threshold:1.0,
})

const observeObjetoTextoCaixa = new IntersectionObserver(entries =>{
    Array.from(entries).forEach(entry => {
       if (entry.intersectionRatio >=1){
           entry.target.classList.add("animacao-3")
       }
   })
} , {
   threshold:1.0,
})

function mudarTexto1(){
    textoPrincipal1.classList.remove("desaparecer")
    textoPrincipal3.classList.add("desaparecer")
    textoPrincipal2.classList.add("desaparecer")
    setTimeout(mudarTexto2, 10000)
}
function mudarTexto2(){
    textoPrincipal2.classList.remove("desaparecer")
    textoPrincipal1.classList.add("desaparecer")
    textoPrincipal3.classList.add("desaparecer")
    setTimeout(mudarTexto3, 10000)
}
function mudarTexto3(){
    textoPrincipal3.classList.remove("desaparecer")
    textoPrincipal2.classList.add("desaparecer")
    textoPrincipal1.classList.add("desaparecer")
    setTimeout(mudarTexto1, 10000)
}

function pulsarCaixaCabelo() {
    caixaCombo.classList.remove("animacao-caixa")
    caixaCabelo.classList.add("animacao-caixa")
    setTimeout(pulsarCaixaBarba, 5000)
}
function pulsarCaixaBarba() {
    caixaCabelo.classList.remove("animacao-caixa")
    caixaBarba.classList.add("animacao-caixa")
    setTimeout(pulsarCaixaCombo, 5000)
}
function pulsarCaixaCombo() {
    caixaBarba.classList.remove("animacao-caixa")
    caixaCombo.classList.add("animacao-caixa")
    setTimeout(pulsarCaixaCabelo, 5000)
}

function carregarMudancaTexto(){
    if (numeroAleatorio === 1){
        mudarTexto1()
    }
    if (numeroAleatorio === 2){
        mudarTexto2()
    }

    if (numeroAleatorio === 3){
        mudarTexto3()
    }
}

observerimgdireito.observe(document.getElementById("img-direito"))

carregarMudancaTexto()
pulsarCaixaCabelo()

listaDeImagemEsquerdo = ['img', 'img-2']

listaDeImagemEsquerdo.forEach(element => {
    observerimg.observe(document.getElementById(element))
});

listaDeElementos = ["texto1","texto2","texto3","sobre",'precos','titulo-agendar',"tempo","data","numero","nome","label1","label2","label3","label4"]

listaDeElementos.forEach(element => {
    obejto = document.getElementById(element)
    observeObjetoTextoCaixa.observe(obejto)
    
});

