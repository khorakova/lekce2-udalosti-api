// tučné písmo v odstavci po najetí myši na odstavec
let odstavec = document.querySelector(".odstavec");

function priNajeti() {
    odstavec.style.fontWeight = "bold";
} 

function priOpusteni() {
    odstavec.style.fontWeight = "normal";
}

// kliknuti na button zmeni pismo v odstavci na cervene, opakovane stisknuti odebere cervenou barvu
function cervenyPoKliknuti() {
    odstavec.classList.toggle("cervenyOdstavec");
}

// po kliknutí zvětší velikost písma v odstavci o jeden px
function vetsiPoKliknuti() { 
    let id = document.getElementById("odstavec");
    style = window.getComputedStyle(id, null).getPropertyValue("font-size");
    currentSize = parseInt(style);
    currentSize++;
    id.style.fontSize = currentSize.toString() + "px";
}

// prehravac
let prehravac = document.querySelector(".mujPrehravac");

function Play() {
    prehravac.play();
}

function Pause() {
    prehravac.pause();
}

function Reset() {
    prehravac.currentTime = 0;
}

function Volume0() {
    prehravac.volume = 0;
}

function Volume05() {
    prehravac.volume = 0.5;
}

function Volume1() {
    prehravac.volume = 1;
}
