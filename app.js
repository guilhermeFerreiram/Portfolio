var dialog = document.querySelector('.popup');

function exibirPopup(nomeProjeto, descricaoProjeto, imagemSrc) {
    var nomeProjetoElement = document.querySelector('.popup__nomeprojeto');
    var descricaoProjetoElement = document.querySelector('.popup_descricao');
    var imagemElement = document.getElementById('imagem-popup');

    nomeProjetoElement.textContent = nomeProjeto;
    descricaoProjetoElement.textContent = descricaoProjeto;
    imagemElement.src = imagemSrc;

    dialog.showModal();
}

function fecharPopup() {
    dialog.close();
}