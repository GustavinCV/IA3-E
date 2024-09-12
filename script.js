const caixaPrincipal = document.querySelector('.caixa-principal');
const caixaPergunta = document.querySelector('.caixa-pergunta');
const caixaAlternativa = document.querySelector('.caixa-alternativa');
const caixaResultado = document.querySelector('.caixa-resultado');

const perguntas = [//abre a lista de objetos (itens)
    {//abre o item
        enunciado:"Você gosta da s IAs",
        alternativas:["Sim"," Não"]
    },
    {
        enunciado:"Você usa as IAs no seu dia a dia?",
        alternativas:["Sim","Não"]
    },
    {
        enunciado:"Você tem medo dos IAs?",
        alternativas:["Sim","Não"]
    }
]
let posicao = 0;
let perguntaAtual;

function mostraPergunta(){
    perguntaAtual = perguntas[posicao];
    caixaPergunta.textContent = perguntaAtual.enunciado
    mostraAlternativas();
}
function mostraAlternativas(){
for
}

