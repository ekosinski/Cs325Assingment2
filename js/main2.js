
    window.onload = function() {

    "use strict";

    var game = new Phaser.Game( 800, 600, Phaser.AUTO, '', { preload: preload, create: create, update: update } );
         
    var text1;
    var text2;
    var counter = 0;
    var happiness = 0;
    //var bg;
    //var girl;
    //var Q;
    //var A1;
    //var A2;
    //var A3;
    
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
        var Q;
        var A1;
        var A2;
        var A3;
        
        text1 = game.add.text(100, 300, '', { fill: '#ffffff' });
        text2 = game.add.text(500, 300, '', { fill: '#ffffff' });
    }

    

    function update() {
        //while (counter < 6) {

            text1.text = "Happiness level is " + happiness + " !";
            text2.text = "Question " + counter + " of 5!";

            if (counter == 0) {
                var Q = game.add.sprite(game.world.centerX - 75, game.world.centerY - 275, 'Q1');
                var A1 = game.add.sprite(game.world.centerX - 390, game.world.centerY + 75, 'A11');
                var A2 = game.add.sprite(game.world.centerX - 125, game.world.centerY + 75, 'A12');
                var A3 = game.add.sprite(game.world.centerX + 140, game.world.centerY + 75, 'A13');
                A1.inputEnabled = true;
                A2.inputEnabled = true;
                A3.inputEnabled = true;
                A1.events.onInputDown.add(listenerA11, this);
                A2.events.onInputDown.add(listenerA12, this);
                A3.events.onInputDown.add(listenerA13, this);
            }
            else if (counter == 1) {
                var Q = game.add.sprite(game.world.centerX - 75, game.world.centerY - 275, 'Q2');
                var A1 = game.add.sprite(game.world.centerX - 390, game.world.centerY + 75, 'A21');
                var A2 = game.add.sprite(game.world.centerX - 125, game.world.centerY + 75, 'A22');
                var A3 = game.add.sprite(game.world.centerX + 140, game.world.centerY + 75, 'A23');
                A1.inputEnabled = true;
                A2.inputEnabled = true;
                A3.inputEnabled = true;
                A1.events.onInputDown.add(listenerA21, this);
                A2.events.onInputDown.add(listenerA22, this);
                A3.events.onInputDown.add(listenerA23, this);
            }
            else if (counter == 2) {
                var Q = game.add.sprite(game.world.centerX - 75, game.world.centerY - 275, 'Q3');
                var A1 = game.add.sprite(game.world.centerX - 390, game.world.centerY + 75, 'A31');
                var A2 = game.add.sprite(game.world.centerX - 125, game.world.centerY + 75, 'A32');
                var A3 = game.add.sprite(game.world.centerX + 140, game.world.centerY + 75, 'A33');
                A1.inputEnabled = true;
                A2.inputEnabled = true;
                A3.inputEnabled = true;
                A1.events.onInputDown.add(listenerA31, this);
                A2.events.onInputDown.add(listenerA32, this);
                A3.events.onInputDown.add(listenerA33, this);
            }
            else if (counter == 3) {
                var Q = game.add.sprite(game.world.centerX - 75, game.world.centerY - 275, 'Q4');
                var A1 = game.add.sprite(game.world.centerX - 390, game.world.centerY + 75, 'A41');
                var A2 = game.add.sprite(game.world.centerX - 125, game.world.centerY + 75, 'A42');
                var A3 = game.add.sprite(game.world.centerX + 140, game.world.centerY + 75, 'A43');
                A1.inputEnabled = true;
                A2.inputEnabled = true;
                A3.inputEnabled = true;
                A1.events.onInputDown.add(listenerA41, this);
                A2.events.onInputDown.add(listenerA42, this);
                A3.events.onInputDown.add(listenerA43, this);
            }
            if (counter == 4) {
                var Q = game.add.sprite(game.world.centerX - 75, game.world.centerY - 275, 'Q5');
                var A1 = game.add.sprite(game.world.centerX - 390, game.world.centerY + 75, 'A51');
                var A2 = game.add.sprite(game.world.centerX - 125, game.world.centerY + 75, 'A52');
                var A3 = game.add.sprite(game.world.centerX + 140, game.world.centerY + 75, 'A53');
                A1.inputEnabled = true;
                A2.inputEnabled = true;
                A3.inputEnabled = true;
                A1.events.onInputDown.add(listenerA51, this);
                A2.events.onInputDown.add(listenerA52, this);
                A3.events.onInputDown.add(listenerA53, this);
            }
            else if (counter == 5) {
                if (happiness >= 3) {
                    game.add.sprite(game.world.centerX - 350, game.world.centerY - 250, 'Ask');
                }
            }

            //counter++;

        //}
    
    }

    // listeners for Q1 
    function listenerA11() {
        counter++;
        happiness++;
        setGirl(happiness);
    }
    function listenerA12() {
        counter++;
        happiness--;
        setGirl(happiness);
    }
    function listenerA13() {
        counter++;
        happiness--;
        setGirl(happiness);
    }

    // listeners for Q2
    function listenerA21() {
        counter++;
        happiness--;
        setGirl(happiness);
    }
    function listenerA22() {
        counter++;
        happiness--;
        setGirl(happiness);
    }
    function listenerA23() {
        counter++;
        happiness++;
        setGirl(happiness);
    }

    // listeners for Q3
    function listenerA31() {
        counter++;
        happiness--;
        setGirl(happiness);
    }
    function listenerA32() {
        counter++;
        happiness++;
        setGirl(happiness);
    }
    function listenerA33() {
        counter++;
        happiness--;
        setGirl(happiness);
    }

    // listeners for Q4
    function listenerA41() {
        counter++;
        happiness++;
        setGirl(happiness);
    }
    function listenerA42() {
        counter++;
        happiness--;
        setGirl(happiness);
    }
    function listenerA43() {
        counter++;
        happiness--;
        setGirl(happiness);
    }

    // listeners for Q5
    function listenerA51() {
        counter++;
        happiness--;
        setGirl(happiness);
    }
    function listenerA52() {
        counter++;
        happiness--;
        setGirl(happiness);
    }
    function listenerA53() {
        counter++;
        happiness++;
        setGirl(happiness);
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

    function destroySprite(sprite) {

        sprite.destroy();

    }

        
    };