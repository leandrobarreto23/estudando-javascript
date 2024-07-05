const paragraph = document.querySelector('p')

paragraph.addEventListener('click', changeName)

function changeName() {
  let name = prompt('Insira o novo nome do jogador: ')

  paragraph.textContent = 'Jogador 1: ' + name
}