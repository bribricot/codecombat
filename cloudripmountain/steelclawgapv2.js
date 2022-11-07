// a % b returns the remainder of a divided by b, this can be used to wrap around to the beginning of an array when an index might be greater than the length

// You start with 360 gold to build a mixture of soldiers and archers.
// hero.built is an array of the troops you have built, ever.
// Here we use "hero.built.length % summonTypes.length" to wrap around the summonTypes array

// HINTS : Use the modulo operator to send 2 units to each guard point. You need to summon 8 units and move to 4 points, so unitIndex % 4 is the requiered defendIndex 

// a % b gives you the remainder (as an integer) of a / b so 12 % 5 == 2 

// This can be used to wrap around an array, for example:
// Using the array: 
// summonTypes = ["soldier","archer","peasant","paladin"] 
// with: type = summonTypes[ i % summonTypes.length 
// 0 % 4 == 0 so type == "soldier"
// 1 % 4 == 1 so type == "archer"
// 2 % 4 == 2 so type == "peasant"
// 3 % 4 == 3 so type == "paladin" and so on...


let defendPoints = [{"x": 35, "y": 63},{"x": 61, "y": 63},{"x": 32, "y": 26},{"x": 64, "y": 26}];

let summonTypes = ["soldier","soldier","soldier","soldier","archer","archer","archer","archer"];

function summonTroops() {
    let type = summonTypes[hero.built.length % summonTypes.length];
    if (hero.gold >= hero.costOf(type)) {
        hero.summon(type);
    }
}

function commandTroops() {
    let friends = hero.findFriends();
    for (let i = 0; i < friends.length; i++) {
        // Use % to wrap around defendPoints based on friends[i]
        // Command your minion to defend the defendPoint
        hero.command(friends[i], "defend", defendPoints[i % defendPoints.length]);
    }
}

while(true) {
    summonTroops();
    commandTroops();
}
