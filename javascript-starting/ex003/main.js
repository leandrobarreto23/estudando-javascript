// Gerar um número aleatório entre 1 e 10.
let randomNumber = Math.floor(Math.random() * 10 + 1)

// pegando os inputs
let inputGuess = document.querySelector('#input-guess')
let inputSubmit = document.querySelector('#submit-guess')

// pegando os resultados
let attempts = document.querySelector('.attempts')
let lastResult = document.querySelector('.last-result')
let lowOrHigh = document.querySelector('.low-or-high')

let xAttempts = 1
let btnTry

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
  else if (attempts === 5) {
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