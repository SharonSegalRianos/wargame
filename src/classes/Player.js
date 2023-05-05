class Player{
    wins = 0;
    loses=0;
    games=0;
    lastGame=0;
    draws = 0;
    lastGamePoints=0;


    constructor(name, cardsArr){
        this.name = name;
        this.cards = cardsArr;
    }
}
export default Player