class CardsDeck {
    
    cardsDeck=[];
    
    constructor(){
        this.startDeck();
    }

    startDeck(){
        for (let i = 1; i < 14 ; i++){
            for (let j = 0; j < 4; j++){
                this.cardsDeck.push(i);
            }
        }
    }

    dealCard(){
        let randNum = Math.floor(Math.random()*this.cardsDeck.length);
        let card = this.cardsDeck.splice(randNum,1);
        return card[0];

    }
}
export default CardsDeck