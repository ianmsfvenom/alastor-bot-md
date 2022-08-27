const fs = require('fs');

class blackJack {
    constructor (jid, playerStart) {
        this.jid = jid;
        this.players = [];
        this.playersWinners = [];
        this.playersLosers = [];
        this.playersInGame = [];
        this.playerStart = playerStart
        this.isStarted = false;
        this.dealerTotalCards = 0;
        this.dealerCards = [];
        this.addPlayer = (player) => {
            if(!this.isStarted) {
                this.players.push({
                    id: player,
                    totalCards: 0,
                    isBurst: false,
                    cards: []
                });
                this.playersInGame.push(player)
            }
        }
        this.getPlayers = () => {
            var playersIds = [];
            for(let i = 0; i < this.players.length; i++) {
                playersIds.push(this.players[i].id);
            }
            return playersIds;
        }
        this.getPlayersInGame = () => {
            var playersIds = [];
            for(let i = 0; i < this.playersInGame.length; i++) {
                playersIds.push(this.playersInGame[i].id);
            }
            return playersIds;
        }

    }
}

module.exports = blackJack;