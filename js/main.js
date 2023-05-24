const form = document.getElementById('novoItem');
const lista = document.getElementById('lista');

form.addEventListener('submit', (evento) => {
  evento.preventDefault();
  this.criaElemento(evento.target.elements['nome'].value, evento.target.elements['quantidade'].value);
});


function criaElemento(nome, quantidade) {

  //<li class="item"><strong>3</strong>Casaco</li>
  const novoItem = document.createElement('li');
  novoItem.classList.add('item');

  const numeroItem = document.createElement('strong');
  numeroItem.innerHTML = quantidade;

  novoItem.appendChild(numeroItem);
  novoItem.innerHTML += nome;

  lista.appendChild(novoItem);
}























// const form = document.getElementById('novoItem');

// form.addEventListener('submit', (evento) => {
//   evento.preventDefault();
//   criaElemento(evento.target.elements['nome'].value, evento.target.elements['quantidade'].value)
// });

// function criaElemento(nome, quantidade){

//   console.log(nome);
//   console.log(quantidade);

// }