function adicionar () {

    let produto = document.getElementById('produto').value;
    let NomeProduto = produto.split('-')[0];
    let valorUnitario = produto.split('R$')[1];
    let quantidade = document.getElementById('quantidade').value;

    let preco = quantidade * valorUnitario;
    let carrinho = console.getElementById('lista-de-produtos-no-carrinho');
    carrinho.innerHTML = carrinho.innerHTML + `<section class="carrinho__produtos__produto">
    <span class="texto-azul">${quantidade}x</span> ${produto} <span class="texto-azul">R$${preco}</span>
  </section>`
}

function Limpar () {
}