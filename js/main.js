//https://www.digitalocean.com/community/tutorials/js-drag-and-drop-vanilla-js-pt

const form = document.getElementById('novoItem');
const lista = document.getElementById('lista');
const setItens = JSON.parse(localStorage.getItem('itens')) || [];

setItens.forEach( (elemento) => {
  this.criaElementos(elemento);
});

form.addEventListener('submit', (evento) => {
  evento.preventDefault();
  const nome = evento.target.elements['nome'];
  const quantidade = evento.target.elements['quantidade'];
  const existe = setItens.find( elemento => elemento.nome === nome.value);
  const objItens = {
    'nome': nome.value,
    'quantidade': quantidade.value,
  };

  if(existe) {
    objItens.id = existe.id;
    this.atualizaElementos(objItens);
    setItens[setItens.findIndex( elemento => elemento.id === existe.id)] = objItens;
  } else {
    objItens.id = setItens[setItens.length - 1] ? setItens[setItens.length - 1].id + 1 : 0 ;
    this.criaElementos(objItens);
    setItens.push(objItens);
  };

  localStorage.setItem('itens', JSON.stringify(setItens));

  nome.value = '';
  quantidade.value = '';
});

function criaElementos(valorItem) {
  const novoItem = document.createElement('li');
  novoItem.classList.add('item');
  
  const numeroItem = document.createElement('strong');
  numeroItem.innerHTML = valorItem.quantidade;
  numeroItem.dataset.id = valorItem.id;

  novoItem.appendChild(numeroItem);
  
  novoItem.innerHTML += valorItem.nome;
  novoItem.appendChild(criaBotaoExcluir(valorItem.id));

  lista.appendChild(novoItem);  
};

function atualizaElementos(item) {
  document.querySelector(`[data-id="${item.id}"]`).innerHTML = item.quantidade;
};

function criaBotaoExcluir(id) {
  const elementoBotao = document.createElement('button');
  elementoBotao.innerText = 'X';

  elementoBotao.addEventListener('click', function() {
    deletaElemento(this.parentNode, id);
  });

  return elementoBotao;
};

function deletaElemento(tag, id) {
  tag.remove();
  setItens.splice(setItens.findIndex(elemento => elemento.id === id),1);

  localStorage.setItem('itens', JSON.stringify(setItens));
}