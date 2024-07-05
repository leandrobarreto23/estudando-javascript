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
  if (inputGuess.value ==  randomNumber) {
    alert("você acertou em " + xAttempts + " tentativas")
  } else {
    alert("Você errou")
    attempts.textContent = "Tentativas: " + xAttempts
    xAttempts++
  }
}