class Player{
    constructor(){}

    getCount(){
        dataBase.ref("playerCount").on("value", function(data){
            playerCount = data.val();
        })
    }

    updateCount(count){
        dataBase.ref("/").update({
            playerCount: count
        })
    }

    update(name){
        var playerIndex = "player" + playerCount
        dataBase.ref(playerIndex).set({
            name: name
        })
    }

}