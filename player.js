class Player {

    constructor() {
        this.choice = null;
        this.index = 0
    }
    
    getChoice()
    {
        
    }

    updateChoice(choice) 
    {

    }
    
    update(x)
    {
      var playerIndex = "players/player"+this.index  
      database.ref(playerIndex).set({
          choice: x
      })
    }


}
