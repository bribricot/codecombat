/* Solve the riddler puzzle and find the treasure.
Count the whitespace on both sides of a riddle.

This function moves the hero N steps right.
function moveNSteps(n) {
    hero.moveXY(hero.pos.x + 8 * n, hero.pos.y);
}

Compte les espaces blancs du début et de la fin du message du Riddler. Ce nombre est le nombre d'étapes dont vous avez besoin pour trouver les trésors.

Utilise la méthode "trim" pour couper les espaces blancs du début et de la fin, puis comparez les longueurs des strings originales et celles coupées pour trouver le nombre requis.

* someStr.trim() method renvoie une copie de la string
* someStr avec les espaces blancs du début et de la fin supprimés.

It's an useful method when you need to clean strings before processing.
*/
// Read the riddle.
var riddle = hero.findNearestEnemy().riddle;
// Trim whitespace from both sides and store in a variable
var trimmed = riddle.trim();
// Find the difference between the `riddle` and `trimmed` lengths:
var difference = (riddle.length - trimmed.length); // 19 riddle et 10 pour riddle

// Use the result and moveNSteps function to move to the spot:
// This function moves the hero N steps right.
function moveNSteps(n) {
    hero.moveXY(hero.pos.x + 8 * n, hero.pos.y);
}

moveNSteps(difference);
hero.say(difference); // 9
