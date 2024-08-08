const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
   enunciado: "Onde se passa o jogo "Uncharted: The Lost Legacy"?",
    alternativas: (
        "Itália",
        "India"
    )
},
{
    enunciado: "Quem fez o chefe de cozinha Gordon Ramsey chorar?",
     alternativas: (
         "Marco Pierre White",
         "Jamie Oliver"
     )
 },
 {
    enunciado: "Onde ocorreu a Guerra do Ópio?",
     alternativas: (
         "Espanha",
         "China"
     )
 },
 {
    enunciado: "Quantos vértices tem um cubo?",
     alternativas: (
         "6",
         "8"
     )
 },
 {
    enunciado: "Quantas temporadas tem a série The Office?",
     alternativas: (
         "7",
         "9"
     )
 },
];

let atual = 0;
let perguntaAtual;

function mostraPergunta() {
      perguntaAtual = perguntas[atual];
      caixaPerguntas.textContent = perguntaAtual.enunciado;
}