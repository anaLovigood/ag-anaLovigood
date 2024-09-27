sketch.js
Salvo: 4 meses atrás
1
function draw() {
2
    background(0);
3
    circle(xBolinha, yBolinha, diametro);
4
    //xBolinha += velocidadeXBolinha;
5
    yBolinha += velocidadeYBolinha;
6
    
7
    if (xBolinha > width || xBolinha < 0) {
8
        velocidadeXBolinha *= -1;
9
    }
10
    if (yBolinha > height || yBolinha < 0) {
11
        velocidadeYBolinha *= -1;
12
    }
13
}
14
​
15
function draw() {
16
    background(0);
17
    mostraBolinha();
18
    movimentaBolinha();
19
    verificaColisaoBorda();
20
}
21
​
22
function mostraBolinha() {
23
    
24
}
25
​
26
function movimentaBolinha() {
27
    xBolinha += velocidadeXBolinha;
28
    yBolinha += velocidadeYBolinha;
29
}
30
​
31
function verificaColisaoBorda() {
32
    if (xBolinha + raio > width || xBolinha - raio < 0) {
33
        velocidadeXBolinha *= -1;
Não há mensagens de Lint
Linha atuallinha 1

