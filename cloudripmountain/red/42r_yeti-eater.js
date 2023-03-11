/* 

Yetis surround us, so it will be a good hunt.
Luckily, the wizard had time to cast the sleep spell.
Your hero can devour yetis' vital powers when they are defeated.
So you have to defeat them in the order from the weakest to the strongest.
Luckily (again), the wizard can sort enemies from the strongest to the weakest.
Reverse that list and act!

We know the ordered list of the yetis, but we need it in the reversed order.

To get the reversed list of the given you just need to read it from the end to the start.
for-loop can be useful for it. We just need to change start, end and step values:

var array = [1, 2, 3];
// Don't forget about use ">" instead "<"
for (var i = array.length - 1; i > -1; i -= 1) {
    hero.say(array[i]);
}

We use the end value -1, because we shouldn't skip the 0-th index.
Also, be careful with the start value: it should be less than the array's length by one.
It can be written with while loop:

var index = array.length - 1;
while (index > -1) { // or 'index >= 0'
    hero.say(array[i]);
    i -= 1; // or 'i--'
}

The wizard sorted enemies, but in the order from the strongest to the weakest.
var wizard = hero.findNearest(hero.findFriends());
var yetis = wizard.findEnemies();

*/


var wizard = hero.findNearest(hero.findFriends());
var yetis = wizard.findEnemies();

// You need iterate the yetis list in the reverse order with a 'for-loop'.
// The start value should be 'yetis.length - 1'.
// Iterate while the index greater than -1.
// Use the negative step -1.
var i = yetis.length - 1;
while (i > -1) {
    // Attack each enemy while its health greater than 0.
    while (yetis[i].health > 0) {
	    hero.attack(yetis[i]);
    }
    i--;
}