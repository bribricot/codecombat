/* Hints: 
Objective : Collect silver and escape from the dungeon by collecting 32 gold coin.
"The ancient "FizzBuzz" rule" : A common question asked of young developers: which came first? fizz, buzz, or fizzbuzz ? 

Be aware of hidden traps, and count your steps. Start to count steps from 1.
Coins are separated by 10 meters distance. The distance between coins - 10 meters.
Use the modulo operator to check if the number of steps taken is divisible by 3 and 5 or just 3 or just 5.

But the most of the coin are placed on hidden traps, so choose your path wisely, count your steps:
(Try to use if/else constructions instead of hard coded route.)

*If the number of steps is divisible by 3 -- move to East
*If the number of steps is divisible by 5 -- move to West
*If the number of steps is divisible by 3 AND by 5 -- move to North-West
*Else move to North

*/

let steps = 1;

while (true) {
    // If the number of steps is divisible by 3 AND by 5 -- move to North-West
    if (steps % 3 === 0 && steps % 5 === 0) {
    	hero.moveXY(hero.pos.x - 10, hero.pos.y + 10);
    }
    // Else if the number of steps is   divisible by 3 -- move to East
    else if (steps % 3  === 0) {
    	hero.moveXY(hero.pos.x + 10, hero.pos.y);
    }
    // Else if the number of steps is divisible by 5 -- move to West
    else if (steps % 5 === 0) {
    	hero.moveXY(hero.pos.x - 10, hero.pos.y);
    }
    // Else move to North
    else {
    	hero.moveXY(hero.pos.x, hero.pos.y + 10);
    }
steps++
}
