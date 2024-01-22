function alterarStatus (id) {
    let gameClicado = document.getElementById(`game-${id}`);
    let imagem = gameClicado.querySelector('.dashboard_item_img');
    let botao = gameClicado.querySelector('.dashboard_item_button');

    if (imagem.classList.contains('dashboard_item_img--remted')) {
        imagem.classList.remove('dashboard_item_img--remted');
        botao.classList.remove('dashboard_item_button--return');
        botao.textContent = 'Alugar';
    } else {
        imagem.classList.add('dashboard_item_img--remted');
        botao.textContent = 'Devolver';
        botao.classList.add('dashboard_item_button--return');


    }
}