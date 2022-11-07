// Complete the paladin rectangle to protect the village.

// This function finds the LEFT-most unit.
function findMostLeft (units) {
    if (units.length === 0) {
        return null;
    }
    var mostLeft = units[0];
    for (var i = 0; i < units.length; i++) {
        if (units[i].pos.x < mostLeft.pos.x) {
            mostLeft = units[i];
        }
    }
    return mostLeft;
}

// This function finds the BOTTOM-most unit:
function findMostBottom (units) {
    if (units.length === 0) {
        return null;
    }
    var mostBottom = units[0];
    for (var i = 0; i < units.length; i++) {
        if (units[i].pos.y < mostBottom.pos.y) {
            mostBottom = units[i];
        }
    }
    return mostBottom;
}

var paladins = hero.findByType("paladin");

// Find the top left paladin with findMostLeft function:
var topLeftPaladin = findMostLeft(paladins);

// Find the bottom right paladin with findMostBottom function:
var bottomRightPaladin = findMostBottom(paladins);

// Use X coordinate from the top left paladin:
var TL = topLeftPaladin.pos.x;
// and Y coordinate from the bottom right paladin:
var BR = bottomRightPaladin.pos.y;
// Move to the {X, Y} point from the previous step:

// Continue to shield while the volcano is erupting:
while(true) {
    hero.move({x: topLeftPaladin.pos.x, y: bottomRightPaladin.pos.y});
    break;
}
while(true) {
    if (hero.pos.x === TL && hero.pos.y === BR) {
        hero.shield();
    }
}
