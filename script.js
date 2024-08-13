const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Onde se passa o jogo Uncharted: The Lost Legacy?",
        alternativas: [
            {
                texto: "India",
                afirmacao: "Correto, "
            },
            {
                texto: "Italia",
                afirmacao: "Incorreto,"
            }
        ]
    },
    {
        enunciado: "Um cubo tem quantos vertices?",
        alternativas: [
            {
                texto: "6",
                afirmacao: "Correto,"
            },
            {
                texto: "8",
                afirmacao: "Incorreto,"
            }
        ]
    },
    {
        enunciado: "Onde ocorreu a Guerra do Ópio?",
        alternativas: [
            {
                texto: "Espanha",
                afirmacao: "Incorreto,"
            },
            {
                texto: "China",
                afirmacao: "Correto,"
            }
        ]
    },
    {
        enunciado: "Marco Pierre White é um chefe inglês especializado em que tipo de culinária?",
        alternativas: [
            {
                texto: "Britânica",
                afirmacao: "Incorreto,"
            },
            {
                texto: "Francesa",
                afirmacao: "Correto,"
            }
        ]
    },
    {
        enunciado: "De quem é a frase: Quando a educação não é libertadora, o sonho do oprimido é ser o opressor ",
        alternativas: [
            {
                texto: "Paulo Freire",
                afirmacao: "Correto."
            },
            {
                texto: "Simone de Beauvoir",
                afirmacao: "Incorreto."
            }
        ]
    },
];


let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "Suas respostas foram, respectivamente:";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();
