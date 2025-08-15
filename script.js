const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Você recebe uma carta misteriosa sobre uma herança em uma cidade isolada e chuvosa. Ao chegar, a névoa densa parece sussurrar segredos antigos. O que você faz primeiro?",
        alternativas: [
            {
                texto: "Procurar a taverna local para ouvir histórias.",
                afirmacao: "Sua curiosidade o levou a buscar conhecimento nos boatos e lendas da cidade, mostrando uma mente analítica."
            },
            {
                texto: "Ir diretamente para a mansão herdada, sem medo.",
                afirmacao: "Sua coragem o impulsionou a enfrentar o desconhecido de frente, revelando uma natureza destemida."
            }
        ]
    },
    {
        enunciado: "Dentro da mansão, você encontra um diário antigo que fala de uma 'linhagem amaldiçoada' e um poder oculto. Uma página está rasgada. O que chama mais sua atenção?",
        alternativas: [
            {
                texto: "O mapa astral desenhado na contracapa do diário.",
                afirmacao: "Você se sentiu atraído pelos mistérios do cosmos, indicando uma conexão com forças astrais e mágicas."
            },
            {
                texto: "As anotações sobre a 'lua de sangue' e a floresta proibida.",
                afirmacao: "Seu instinto foi aguçado pelos segredos da natureza e seus ciclos, sugerindo um elo com o mundo selvagem."
            }
        ]
    },
    {
        enunciado: "Um barulho ecoa do porão. Descendo as escadas rangentes, você vê um espectro translúcido que aponta para um baú selado com correntes. Como você reage?",
        alternativas: [
            {
                texto: "Tenta se comunicar com o espírito, buscando entender seu aviso.",
                afirmacao: "Você demonstrou empatia pelo sobrenatural, buscando aliança e entendimento em vez de conflito."
            },
            {
                texto: "Ignora o fantasma e tenta arrombar o baú imediatamente.",
                afirmacao: "Sua determinação em obter poder superou a cautela, mostrando uma ambição que beira a imprudência."
            }
        ]
    },
    {
        enunciado: "Dentro do baú, há dois artefatos: um medalhão que pulsa com uma luz fria e uma adaga ritualística coberta de runas. O diário diz que você só pode escolher um para despertar seu poder. Qual você pega?",
        alternativas: [
            {
                texto: "O Medalhão Lunar, que promete controle sobre as sombras e a mente.",
                afirmacao: "Ao escolher o medalhão, você abraçou o poder sutil e manipulador das sombras, tornando-se um mestre do oculto."
            },
            {
                texto: "A Adaga Primeva, que oferece a força e a fúria de uma fera.",
                afirmacao: "Ao empunhar a adaga, você aceitou a fúria da natureza, transformando-se em um predador com instintos selvagens."
            }
        ]
    },
    {
        enunciado: "Ao tocar o artefato, uma visão inunda sua mente: a cidade sendo ameaçada por uma criatura das profundezas. Agora com seus novos poderes, qual é o seu primeiro instinto?",
        alternativas: [
            {
                texto: "Planejar uma armadilha, usando o conhecimento da cidade e seus novos poderes de forma estratégica.",
                afirmacao: "Seu caminho é o de um guardião astuto, que usa a inteligência para proteger os inocentes e derrotar as trevas."
            },
            {
                texto: "Caçar a criatura diretamente, testando os limites da sua nova força em um confronto direto.",
                afirmacao: "Você se tornou um caçador implacável, cuja lenda será contada em sussurros, como o monstro que caça monstros."
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
    caixaAlternativas.innerHTML = ""; // Limpa as alternativas anteriores
    mostraAlternativas();
}

function mostraAlternativas() {
    for (const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    // Corrigido de 'afirmacoes' para 'afirmacao' para corresponder ao objeto
    const afirmacao = opcaoSelecionada.afirmacao; 
    historiaFinal += afirmacao + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "Seu destino foi traçado...";
    caixaAlternativas.innerHTML = ""; // Limpa os botões
    textoResultado.textContent = historiaFinal;
    caixaResultado.style.display = "block"; // Garante que o resultado seja visível
}

mostraPergunta();

   document.addEventListener('mousemove', function(e){
       // Mover o cursor personalizado para a posição do mouse
       document.getElementById('custom-cursor').style.left = e.clientX + 'px';
       document.getElementById('custom-cursor').style.top = e.clientY + 'px';
   });

   document.addEventListener('mouseover', function(e){
       // Ocultar o cursor padrão
       document.body.style.cursor = 'none';
   });
