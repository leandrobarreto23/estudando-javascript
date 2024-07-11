const app = document.querySelector('#app')

// Gerar um número aleatório entre 1 e 10.
let randomNumber = Math.floor(Math.random() * 10 + 1)

// pegando os inputs
const inputGuess = document.querySelector('#input-guess')
const inputSubmit = document.querySelector('#submit-guess')

// pegando os resultados
const attempts = document.querySelector('.attempts')
const lastResult = document.querySelector('.last-result')
const lowOrHigh = document.querySelector('.low-or-high')

let xAttempts = 1

const paragraphs = document.querySelector('.paragraphs')

inputSubmit.addEventListener('click', checkGuess)

function checkGuess(event) {
  event.preventDefault()

  //armazena o valor do input que o usuario palpitou
  let guessUser = Number(inputGuess.value)

  if(guessUser === 1) {
    attempts.textContent = "Palpites anteriores: "
  }
  // Pegue o <p> de resultado e armazene o valor do ultimo palpite
  attempts.textContent += guessUser + ", "

  // se o palpite do usuario for igual ao numero aleatório escreva...
  if(guessUser === randomNumber) {
    lastResult.textContent = "Parabéns! Você acertou!"
    lastResult.style.backgroundColor = "lightgreen"
    lowOrHigh.textContent = " "
    configEndGame()
  } 
  // se o numero de tentativas chegar a 5, termine o jogo
  else if (xAttempts === 5) {
    lastResult.textContent = "!!! Fim de Jogo !!!"
    lowOrHigh.textContent = " "
    configEndGame()
  }
  // se errar o palpite, escreva errado e destaque com uma cor
  else {
    lastResult.textContent = "Errado!"
    lastResult.style.backgroundColor = "lightsalmon"
    // se o palpite do usuario for menor que o numero aleatório
    if (guessUser < randomNumber) {
      lowOrHigh.textContent = "Seu palpite está baixo."
    } else {
      lowOrHigh.textContent = "Seu palpite está alto."
    }
  }
  // zera o valor do input quando termina a aplicação
  inputGuess.value = ""
  // foca no input no final da aplicação
  inputGuess.focus()
}

function configEndGame() {
  //quando o jogo acabar, desabilite os botoes
  inputGuess.disabled = true
  inputSubmit.disabled = true

  // criando o botao de reinicio
  restartButton = document.createElement('button')
  // adicionando conteudo ao botao
  restartButton.textContent = "Novo Jogo"
  // adicionando uma classe de estilo ao botao
  restartButton.classList.add('restart-button')
  //atribuindo o botao ao corpo do app
  app.appendChild(restartButton)

  restartButton.addEventListener('click', restartGame)
}

function restartGame() {
  xAttempts = 1

  //pegando todos os paragrafos dentro da div e armazenando em um NodeList
  let resetParagraphs = paragraphs.querySelectorAll('p')

  //percorrendo o NodeList e mudando cada posição para vazio ("")
  for (let i = 0; i < resetParagraphs.length; i++) {
    resetParagraphs[i].textContent = ""
  }

  restartButton.parentNode.removeChild(restartButton)

  // habilitando novamente os inputs
  inputGuess.disabled = false
  inputSubmit.disabled = false

  inputGuess.value = ""
  inputGuess.focus()

  randomNumber = Math.floor(Math.random() * 10 + 1)
}