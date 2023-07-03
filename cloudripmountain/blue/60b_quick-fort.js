/*
We should quickly build a fort!. 
Each peasant has one speciality and can build only one type of constructions:
* Carpenter - fences;
* Mason - towers;
* Builder - tents.

The foreman mixed their names in one list, but in the specific order.
The list looks like [builder, mason, carpenter, builder, mason, carpenter, ...] 

Iterate over all the workers and have them build a tower, tent, or fence.
Say the peasant's name outloud as well as their task so they can perform their duties.

Ogres often use the valley.
It should be easy to block and destroy their army here. 
We should quickly build a fort!

This is the engineering peasant squad. 
Each peasant has one speciality and can build only one type of construction. 
Carpenters can build fences; 
masons - towers; 
builders - tents.

The foreman mixed their names in one list, but in a specific order. 
The list looks like [builder, mason, carpenter, builder, mason, carpenter, ...]

Use that list and assign the proper task for each peasant.

For loops could be useful to choose each n-th element from an array.

For example: Choose each third element from the array starting from 1st:
for (let i = 1; i < array.length; i += 3) {
    hero.say(array[i]);
}	
*/
// The foreman stored the list of workers' names as a property.
let foreman = hero.findNearest(hero.findFriends());
let workerNameList = foreman.workerList;


// Use loops with steps to choose each third element.
// First, you need assign workers for the towers.
// Use start value 1 and increase the index by 3.
for (let i = 1; i < workerNameList.length; i += 3) {
    // For each of them say the name and what to build.
    hero.say(workerNameList[i] + " - tower");
}

// First, you need assign workers for the tents.
// Use start value 0 and increase the index by 3.
for (i = 0; i < workerNameList.length; i += 3) {
    // For each of them say to build "tent".
    hero.say(workerNameList[i] + " - tents");
}

// Finally, you need assign workers for the fence.
// Use start value 2 and increase the index by 3.
for (i = 2; i < workerNameList.length; i += 3)
    // For each of them say to build "fence".
    hero.say(workerNameList[i] + " - fence");

// Now watch for the battle or help your army.
while (true) {
    let enemy = hero.findNearestEnemy();
    if (enemy) {
        hero.attack(enemy);
    }
}