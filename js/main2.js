<!doctype html>
<html>
    <head>
        <meta charset="UTF-8" />
        <title>Nerdy Dating Sim</title>
        <script src="phaser.js"></script>
        <script src="js/main2.js"></script>
    </head>
    <body>

    <script type="text/javascript">

    window.onload = function() {

    "use strict";

    var game = new Phaser.Game( 800, 600, Phaser.AUTO, '', { preload: preload, create: create, update: update } );

    var text;
    var happiness = 0;
    var counter = 0;

    function preload() {

    //Load the heart background
        game.load.image('bg','assets/LoveBackground.png');
        
        //Load the girl
        game.load.image('girlHappy3', 'assets/girlHappy3.png');
        game.load.image('girlHappy2', 'assets/girlHappy2.png');
        game.load.image('girlHappy1', 'assets/girlHappy1.png');
        game.load.image('girlNeutral', 'assets/girlNeutral.png');
        game.load.image('girlSad1', 'assets/girlSad1.png');
        game.load.image('girlSad2', 'assets/girlSad2.png');
        game.load.image('girlSad3', 'assets/girlSad3.png');
        game.load.audio('groan', 'assets/groan.mp3');
        game.load.audio('ooh','assets/ooh.mp3');

        //Load questions and answers
        game.load.image('Q1','assets/Q1.png');
        game.load.image('A11','assets/A11.png');
        game.load.image('A12','assets/A12.png');
        game.load.image('A13', 'assets/A13.png');

        game.load.image('Q2', 'assets/Q2.png');
        game.load.image('A21', 'assets/A21.png');
        game.load.image('A22', 'assets/A22.png');
        game.load.image('A23', 'assets/A23.png');

        game.load.image('Q3', 'assets/Q3.png');
        game.load.image('A31', 'assets/A31.png');
        game.load.image('A32', 'assets/A32.png');
        game.load.image('A33', 'assets/A33.png');

        game.load.image('Q4', 'assets/Q4.png');
        game.load.image('A41', 'assets/A41.png');
        game.load.image('A42', 'assets/A42.png');
        game.load.image('A43', 'assets/A43.png');

        game.load.image('Q5', 'assets/Q5.png');
        game.load.image('A51', 'assets/A51.png');
        game.load.image('A52', 'assets/A52.png');
        game.load.image('A53', 'assets/A53.png');

        game.load.image('Ask', 'assets/Ask.png');
        
    }

    function create() {

        var bg = game.add.sprite(0,0,'bg');
        var girl = game.add.sprite(game.world.centerX - 300, game.world.centerY - 275, 'girlNeutral');
        var Q1 = game.add.sprite(game.world.centerX - 75, game.world.centerY - 275, 'Q1');
        var A11 = game.add.sprite(game.world.centerX - 390, game.world.centerY + 75, 'A11');
        var A12 = game.add.sprite(game.world.centerX - 125, game.world.centerY + 75, 'A12');
        var A13 = game.add.sprite(game.world.centerX + 140, game.world.centerY + 75, 'A13');
        

        A11.inputEnabled = true;
        A12.inputEnabled = true;
        A13.inputEnabled = true;

        A11.events.onInputDown.add(listenerA11(), this);
        A12.events.onInputDown.add(listenerA12(), this);
        A13.events.onInputDown.add(listenerA13(), this);

        groan = game.add.audio('groan');
        ooh = game.add.audio('ooh');

        var Q2;
        var Q3;
        var Q4;
        var Q5;
        var A21;
        var A22;
        var A23;
        var A31;
        var A32;
        var A33
        var A41;
        var A42;
        var A43
        var A51;
        var A52;
        var A53;
        var groan;
        var ooh;

        //text = game.add.text(250, 300, '', { fill: '#ffffff' });
    }

    

    function update() {
        
        if (counter == 0) {

        }
        else if (counter == 1) {
            Q1.destroy();
            A11.destroy();
            A12.destroy();
            A13.destroy();
            Q2 = game.add.sprite(game.world.centerX - 75, game.world.centerY - 275, 'Q2');
            A21 = game.add.sprite(game.world.centerX - 390, game.world.centerY + 75, 'A21');
            A22 = game.add.sprite(game.world.centerX - 125, game.world.centerY + 75, 'A22');
            A23 = game.add.sprite(game.world.centerX + 140, game.world.centerY + 75, 'A23');

            A21.inputEnabled = true;
            A22.inputEnabled = true;
            A23.inputEnabled = true;

            A21.events.onInputDown.add(listenerA21, this);
            A22.events.onInputDown.add(listenerA22, this);
            A23.events.onInputDown.add(listenerA23, this);
        }
        else if (counter == 2) {
            Q2.destroy();
            A21.destroy();
            A22.destroy();
            A23.destroy();
            Q3 = game.add.sprite(game.world.centerX - 75, game.world.centerY - 275, 'Q3');
            A31 = game.add.sprite(game.world.centerX - 390, game.world.centerY + 75, 'A31');
            A32 = game.add.sprite(game.world.centerX - 125, game.world.centerY + 75, 'A32');
            A33 = game.add.sprite(game.world.centerX + 140, game.world.centerY + 75, 'A33');

            A31.inputEnabled = true;
            A32.inputEnabled = true;
            A33.inputEnabled = true;

            A31.events.onInputDown.add(listenerA31, this);
            A32.events.onInputDown.add(listenerA32, this);
            A33.events.onInputDown.add(listenerA33, this);
        }
        else if (counter == 3) {
            Q3.destroy();
            A31.destroy();
            A32.destroy();
            A33.destroy;
            Q4 = game.add.sprite(game.world.centerX - 75, game.world.centerY - 275, 'Q4');
            A41 = game.add.sprite(game.world.centerX - 390, game.world.centerY + 75, 'A41');
            A42 = game.add.sprite(game.world.centerX - 125, game.world.centerY + 75, 'A42');
            A43 = game.add.sprite(game.world.centerX + 140, game.world.centerY + 75, 'A43');

            A41.inputEnabled = true;
            A42.inputEnabled = true;
            A43.inputEnabled = true;

            A41.events.onInputDown.add(listenerA41, this);
            A42.events.onInputDown.add(listenerA42, this);
            A43.events.onInputDown.add(listenerA43, this);
        }
        if (counter == 4) {
            Q4.destroy();
            A41.destroy();
            A42.destroy();
            A43.destroy;
            Q5 = game.add.sprite(game.world.centerX - 75, game.world.centerY - 275, 'Q5');
            A51 = game.add.sprite(game.world.centerX - 390, game.world.centerY + 75, 'A51');
            A52 = game.add.sprite(game.world.centerX - 125, game.world.centerY + 75, 'A52');
            A53 = game.add.sprite(game.world.centerX + 140, game.world.centerY + 75, 'A53');

            A51.inputEnabled = true;
            A52.inputEnabled = true;
            A53.inputEnabled = true;

            A51.events.onInputDown.add(listenerA51, this);
            A52.events.onInputDown.add(listenerA52, this);
            A53.events.onInputDown.add(listenerA53, this);
        }
        else if (counter == 5) {
            Q5.destroy();
            A51.destroy();
            A52.destroy();
            A53.destroy();
            game.add.sprite(game.world.centerX - 350, game.world.centerY - 250, 'Ask');
        }
    
    }

    // listeners for Q1 
    function listenerA11() {
        happiness++;
        setGirl(happiness);
        counter++;
        ooh.play();

    }
    function listenerA12() {
        happiness--;
        setGirl(happiness);
        counter++;
        groan.play();
    }
    function listenerA13() {
        happiness--;
        setGirl(happiness);
        counter++;
        groan.play();
    }
    // listeners for Q2
    function listenerA21() {
        happiness--;
        setGirl(happiness);
        counter++;
        groan.play();
    }
    function listenerA22() {
        happiness--;
        setGirl(happiness);
        counter++;
        groan.play();
    }
    function listenerA23() {
        happiness++;
        setGirl(happiness);
        counter++;
        ooh.play();
    }

    // listeners for Q3
    function listenerA31() {
        happiness--;
        setGirl(happiness);
        counter++;
        groan.play();
    }
    function listenerA32() {
        happiness++;
        setGirl(happiness);
        counter++;
        ooh.play();
    }
    function listenerA33() {
        happiness--;
        setGirl(happiness);
        counter++;
        groan.play();
    }
    // listeners for Q4
    function listenerA41() {
        happiness--;
        setGirl(happiness);
        counter++;
        groan.play();
    }
    function listenerA42() {
        happiness--;
        setGirl(happiness);
        counter++;
        groan.play();
    }
    function listenerA43() {
        happiness++;
        setGirl(happiness);
        counter++;
        ooh.play();
    }
    // listeners for Q5
    function listenerA51() {
        happiness--;
        setGirl(happiness);
        counter++;
        groan.play();
    }
    function listenerA52() {
        happiness--;
        setGirl(happiness);
        counter++;
        groan.play();
    }
    function listenerA53() {
        happiness++;
        setGirl(happiness);
        counter++;
        ooh.play();
    }

    function setGirl(happiness) {
        if (happiness >= 3) { girl = game.add.sprite(game.world.centerX - 300, game.world.centerY - 275, 'girlHappy3'); }
        if (happiness == 2) { girl = game.add.sprite(game.world.centerX - 300, game.world.centerY - 275, 'girlHappy2'); }
        if (happiness == 1) { girl = game.add.sprite(game.world.centerX - 300, game.world.centerY - 275, 'girlHappy1'); }
        if (happiness == 0) { girl = game.add.sprite(game.world.centerX - 300, game.world.centerY - 275, 'girlNeutral'); }
        if (happiness == -1) { girl = game.add.sprite(game.world.centerX - 300, game.world.centerY - 275, 'girlSad1'); }
        if (happiness == -2) { girl = game.add.sprite(game.world.centerX - 300, game.world.centerY - 275, 'girlSad2'); }
        if (happiness <= -3) { girl = game.add.sprite(game.world.centerX - 300, game.world.centerY - 275, 'girlSad3'); }
    }

    function killSprite(sprite) {
        sprite.kill();
    }

        
    };

    </script>

    </body>
</html>