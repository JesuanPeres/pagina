const GAME_HEIGHT = 250;
const GAME_WIDTH = 700;
const FPS = 15;
const FLOOR_HEIGHT = 10;

window.onload = function() {
    Crafty.init(GAME_WIDTH, GAME_HEIGHT, document.getElementById('game'));
    Crafty.background('#ffa');


    Crafty.c('character', {
        init: function(){
            this.addComponent("2D, Canvas, Twoway, Motion, Gravity, Color, Collision")
            .attr({
                w: 50,
                h: 50,
            }).twoway(200).gravity('floor').onHit('platform', function(){
                this.y += 1;
                this.velocity().y = 0;
            });
        },

        posit: function(x, y){
            this.x = x;
            this.y = y;
        },


    })

    // //Adicionando o jogador
    let player = Crafty.e('character').color('#f00').posit(10, GAME_HEIGHT / 2);

    // let player2 = Crafty.e('character').color('#00f').posit(200, GAME_HEIGHT /2);

    //Adicionando o chão
    Crafty.e('floor, 2D, DOM, Color, Solid').attr({
        x: 0,
        y: GAME_HEIGHT - 10,
        w: GAME_WIDTH / 2 - 100,
        h: FLOOR_HEIGHT,
    }).color('#aaa');



    Crafty.e('floor, 2D, DOM, Color').attr({
        x: GAME_WIDTH / 2,
        y: GAME_HEIGHT - 10,
        w: GAME_WIDTH / 2,
        h: FLOOR_HEIGHT,
    }).color('#aaa');

    Crafty.e('platform, 2D, DOM, Color, floor').attr({
        x: GAME_WIDTH / 2,
        y: GAME_HEIGHT / 2 - 10,
        w: 100,
        h: FLOOR_HEIGHT,
    }).color('#aaa');

    Crafty.log(player);
    
}