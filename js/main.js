//https://www.digitalocean.com/community/tutorials/js-drag-and-drop-vanilla-js-pt

const form = document.getElementById('novoItem');
const lista = document.getElementById('lista');
const setItens = JSON.parse(localStorage.getItem('itens')) || [];

setItens.forEach( (elemento) => {
  this.criaElemetos(elemento);
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
    objItens.id = existe.id
    this.atualizaElementos(objItens);
    setItens[existe.id] = objItens;
  } else {
    objItens.id = setItens.length;
    this.criaElemetos(objItens);
    setItens.push(objItens);
  };

  localStorage.setItem('itens', JSON.stringify(setItens));

  nome.value = '';
  quantidade.value = '';
});

function criaElemetos(valorItem) {
  const novoItem = document.createElement('li');
  novoItem.classList.add('item');

  const numeroItem = document.createElement('strong');
  numeroItem.innerHTML = valorItem.quantidade;
  numeroItem.dataset.id = valorItem.id;

  novoItem.appendChild(numeroItem);
  novoItem.innerHTML += valorItem.nome;
  novoItem.appendChild(criaBotaoExcluir());
  lista.appendChild(novoItem);
};

function atualizaElementos(item) {
  document.querySelector(`[data-id="${item.id}"]`).innerHTML = item.quantidade;
};

function criaBotaoExcluir() {
  const elementoBotao = document.createElement('button');
  elementoBotao.innerText = 'x';

  elementoBotao.addEventListener('click', function() {
    deletaElemento(this.parentNode)
  });

  return elementoBotao;
};

function deletaElemento(tag){
  tag.remove();
}