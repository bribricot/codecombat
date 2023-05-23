/* Pender vous a mis au défi de passer son célèbre examen annuel de magicien. Utilisez la puissance combinée des paysans, des soldats et des archers pour réussir le test!

Pender veut vous tester sur une série d'essais. Utilisez votre étoile de boss pour éliminer les ogres ! N'oubliez pas que vous ne pouvez ni vous déplacer ni attaquer à ce niveau.
Vous vous souvenez de la Boss Star ? Vous pouvez invoquer des troupes et les faire attaquer pour vous. Utilisez le paysan pour faire la collecte de pièces tout en commandant aux archers et aux soldats de se battre.

Peasants can collect coins:
item = hero.findNearestItem()
if friend.type == "peasant" and item:
    hero.command(friend,"move",item.pos)

For archers and soldiers, you'd probably want them stationed around (30,36) when there are no ogres, just to be safe!

if enemy:
    # Do fighting
else:
    hero.command(friend,"move",Vector(30,36))  
*/

function summonTroops(){
    // These are just an example. Feel free to use griffin riders and/or other units!
    if (hero.gold >= 40){
        hero.summon("archer"); 
        hero.summon("soldier");
    }
}

function collectCoins(friends){
    let items = hero.findNearest(hero.findItems());
    
    if (items && friends.type === "peasant"){
        hero.command(friends, "move", items.pos)
    }
}

while (true){
    summonTroops();
    let friends = hero.findFriends();
    let enemies = hero.findEnemies();
    let soldier = friends[i].type === 'soldier';
    let archer = friends[i].type === 'archer';
    // Iterate over all troops using a for loop. Make peasants collect coins. Combat troops fight. 
    collectCoins(friends);
    for (let i = 0; i < friends.length; i++) {
        if (enemies) {
            hero.command(soldier, "attack", enemies);
            hero.command(archer, "attack" enemies);
        } else {
            hero.command(friends, "move", {x: 30, y: 36})
        }
    }    
}
