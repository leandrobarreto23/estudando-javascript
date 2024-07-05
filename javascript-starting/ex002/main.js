const button = document.querySelectorAll('button')

//todo e qualquer botao clicado chamará a funcao createParagraph
for (let i = 0; i < button.length; i++) {
  button[i].addEventListener('click', createParagraph)
}

function createParagraph() {
  let paragraph = document.createElement('p')
  
  paragraph.textContent = 'Voce clicou no botão!'

  document.body.appendChild(paragraph)
}