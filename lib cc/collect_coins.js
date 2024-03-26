// Collect nearest tab of coins then move.
 while(true) {
		var coins = hero.findNearest(hero.findItems());
	hero.move(coins.pos);
}

//Find the nearest coin and collect it by moving.
function collectCoins() {
		var coin = hero.findNearestItem();
	hero.move(coin.pos);
}

function pickUpNearestCoin() {
		var coins = hero.findItems();
		var nearest = hero.findNearest(coins);
    hero.move(nearest.pos);    
}

function pickUpCoin() {
    var coins = hero.findItems();
    for (var i = 0; i < coins.length; i++) { 
        var coin = hero.findNearest(coins);
        hero.move(coin.pos);
    }
}