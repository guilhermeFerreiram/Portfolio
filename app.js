function menuShow() {
    let menuMobile = document.querySelector('.mobile__nav');
    if (menuMobile.classList.contains('open')){
        menuMobile.classList.remove('open');
        document.querySelector('.icon').src = "Imagens/icone_menu.png"
    }
    else{
        menuMobile.classList.add('open');
        document.querySelector('.icon').src = "Imagens/icone_menu_fechar.png"
    }
}

window.onload = function() {
    setTimeout(function() {
        document.getElementById("radio2").checked = true;
    }, 2000);
};