let xbolinha = 300;
let yBolinha = 200;
let diametro = 17;

let velocidadeXBolinha  = 6;
let velocidadeYBolinha  = 6;
 
let xRaquete = 5;
let yRaquete = 150;

//variáveis do oponente
let xRaqueteOponente = 585;
let yRaqueteOponente = 150;

//placar do jogo
let meusPontos = 0;
let pontosDoOponente = 0;

let raqueteComprimento = 10;
let raqueteAltura = 90;
function setup() {
  createCanvas(600, 400);
}

function draw() {
  background(3);  
  circle(xBolinha,yBolinha,diametro);
  xBolinha  += velocidadeXBolinha;
  yBolinha += velocidadeYBolinha
  rect(5,150,10,90);
  mostraRaqueteOponente();
  incluiPlacar();
  
  if(xBolinha > width ||
    xBolinha < 0){
  velocidadeXBolinha *= -1;
  }
  
  if (yBolinha > height ||  
     yBolinha< 0){
    velocidadeYBolinha *= -1;
  }
  
}


function movimentaMinhaRaquete() {
    if (keyIsDown(UP_ARROW)) {
        yRaquete -= 10;
    }
    if (keyIsDown(DOWN_ARROW)) {
        yRaquete += 10;
    }
}


function mostraRaqueteOponente() {
    rect(xRaqueteOponente, yRaqueteOponente, raqueteComprimento, raqueteAltura);
}

function incluiPlacar() {
    fill(255);
    text(meusPontos, 278, 26);
    text(pontosDoOponente, 321, 26);
}



















