hero.findNearest() 
/*
***findNearest(units);***
>Returns the closest unit out of an array of units, or null if the array is empty.
###Required Parameters###
units:array (ex:hero.findItems())

Looks at an array of objects or positions and determines which is the closest to the hero (in this case, the hero). The difference between the two statements is small but significant.

- Requires an array of objects or positions. You must have manually gotten them via another find function.
*/

hero.findNearest(enemies);

/* Passes an array variable named enemies to findNearest(). 
This array might have been stored from findEnemies() or could have been manually created. One use of this is to get the list and remove one type of enemy from the list, so that we could get other data. While this is added capability, often, you’ll simply see the following:
*/
let enemies = hero.findEnemies();
let enemy = hero.findNearest(enemies);

hero.findNearest(hero.findEnemies()) //or in one less instruction.

/* Automatically gets the list of enemies as an Array and passes it directly to findNearest() so it can choose. 
This means that there is no processing of the enemies, so they aren’t counted, prioritized, categorized, or … well anything.
*/

hero.findNearestEnemy() 

/*
>Returns the closest living enemy within eyesight (100m and line-of-sight), or null if there aren't any.
findNearestEnemy() returns the object that represents nearest enemy, or the value "None".

Automatically skips the step of getting the enemies for you. Unfortunately, it does not allow for any distinguishing of enemy characteristics. Basically, this is great if you don’t have to avoid sand-yaks or yetis. 

Usecase in a "if":
The reason it can be used in an if statement is because certain values are considered “falsey” or “truthy”.

For example, the values 0 and None are considered falsey, but None == False is False. :slight_smile:

An ogre object is “truthy” but does not equal the Boolean value of True.

So you could try if hero.findNearestEnemy() != None: but usually it’s easier to leave out the None bit, unless you really need to be specific for some reason.
*/

hero.findNearestItem();

/*
***hero.findNearestItem();***
>Returns the closest item within eyesight (100m and line-of-sight), or "null" if there aren't any.
*/