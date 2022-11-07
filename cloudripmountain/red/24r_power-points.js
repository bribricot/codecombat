// You need to find and destroy 3 skeletons.
// Skeletons and items are summoned at points of power.
// Move to a point and say the spell: "VENI".
// To find the required points, use the wizard's map.
// 0s are bad points. Positive numbers are good.

var spell = "VENI";
// The map of points is a 2D array of numbers.
var wizard = hero.findNearest(hero.findFriends());
var powerMap = wizard.powerMap;

// This function converts grid into x-y coordinates.
function convert(row, col) {
    return {x: 16 + col * 12, y: 16 + row * 12};
}

function moveBri(pos) {
    while (hero.pos.x != pos.x || hero.pos.y != pos.y) {
        hero.move(pos);
    }
}

// Loop through the powerMap to find positive numbers.
// First, loop through indexes of rows.
for (var i = 0; i < powerMap.length; i++) {
    // Each row is an array. Iterate through it.
    for (var j = 0; j < powerMap[i].length; j++) {
        // Get the value of the i row and j column.
        var pointValue = powerMap[i][j];
        // If it's a positive number:
        var objective = convert(i, j);
        if (pointValue > 0) {
            moveBri(objective)
            hero.say(spell);
        }
        var enemy = hero.findNearestEnemy();
        if (enemy) {
            hero.attack(enemy);
            hero.attack(enemy);
        }
        var item = hero.findNearestItem();
        if (item) {
            moveBri(item.pos);
        }
    }
} 
