const form = document.getElementById('novoItem');
const setItens = JSON.parse(localStorage.getItem('itens')) || [];

setItens.forEach( (elementos) => {
  this.criaElemento(elementos);
});

form.addEventListener('submit', (evento) => {
  evento.preventDefault();
  const nome = evento.target.elements['nome'];
  const quantidade = evento.target.elements['quantidade'];

  const objItens = {
    'nome': nome.value,
    'quantidade': quantidade.value
  }

  this.criaElemento(objItens);

  setItens.push(objItens);
  localStorage.setItem('itens', JSON.stringify(setItens));

  nome.value = '';
  quantidade.value = '';
});

function criaElemento(elementos) {
  //<li class="item"><strong>7</strong>Camisas</li>
  const novoItem = document.createElement('li');
  novoItem.classList.add('item');

  const numeroItem = document.createElement('strong');
  numeroItem.innerHTML = elementos.quantidade;

  novoItem.appendChild(numeroItem);
  novoItem.innerHTML += elementos.nome;

  const lista = document.getElementById('lista');
  lista.appendChild(novoItem);
}