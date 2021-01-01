class Game{
    constructor(){}

    getState(){
        dataBase.ref("gameState").on("value", function(data){
            gameState = data.val();
        })
    }

    update(state){
        dataBase.ref("/").update({
            gameState: state 
        })
    }

    start(){
        if(gameState === 0){
            player = new Player();
            player.getCount();
            form = new Form();
            form.display();
        }
    }

    
}