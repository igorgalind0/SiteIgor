import initScrollSuave from './modules/scroll-suave.js';
import MenuMobile from './modules/menu-mobile.js';
import CarrosselStack from './modules/carrossel-stack.js';
import initAnimacaoScroll from './modules/scroll-animacao.js';

initScrollSuave();
MenuMobile();
CarrosselStack();
initAnimacaoScroll();

//Animação
if (window.SimpleAnime) {
    new SimpleAnime();
}