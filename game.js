class Game {
    constructor() {



    }

    // get the current gamestate from the database
    // update the gamestate to the database

    getState() {



    }

    update(state) {



    }

    async start() {

        if (gameState === 0) 
        {
            background("black");

            player = new Player();
            //var playerCountRef = await database.ref('playerCount').once("value");
            textSize(15);
            fill("white");
            text("You are now a part of the war between two mighty space forces - The Empire and the Rebellion", 350, 50);
            text("A Rebellion warrior wakes up in a unknown planet in a spacesuit where he can hear distant sounds of wars going on and he cannot remember who he is and what he is doing here.", 50, 100)
            text("You will have to choose to be the brave Rebellion warrior or the unjust Empire soldier. Click on their images to choose who you want to be", 250, 150);
            text("The story will be slowly revealed by progressing the game.", 500, 200);
            text("Goodluck, bravehearts!", 600, 250);
            text("Rebel", 530, 520);
            text("Soldier", 830, 520);
           

            rebel = createSprite(550, 400, 50, 50);
            rebel.addImage(playerImg);
            rebel.scale = 0.5;
            soldier = createSprite(850, 400, 50, 50);
            soldier.addImage(enemyBotImg);
            soldier.scale = 0.5;

            if (mousePressedOver(rebel)) 
            {
               return choose = "rebel"
            }
            if (mousePressedOver(soldier)) 
            {
               return choose = "soldier";
            }
            player.update();
            

        }



    }



}
