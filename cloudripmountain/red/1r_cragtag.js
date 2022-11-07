//Objectif : Understand that with moveXY your program will stop executing until your hero has reached the specified(x,y) location.

//Block or execute? 
//With "move" your hero will move toward the pos you pass in, but your program will continue to execute.This means that your hero will take a few steps in the direction of pos.
//but then your program will continue to run, so you can interrupt that movement by taking different actions in the next loops of your code.

// Catch up to Pender Spellbane to learn her secrets.

while(true) {
    // Pender is the only friend here, so she's always the nearest.
    var pender = hero.findNearest(hero.findFriends());

    if (pender) {
        // moveXY() will move to where Pender is,
        // but she'll have moved away by the time you get there.
        hero.move(pender.pos);
        // move() only moves one step at a time,
        // so you can use it to track your target.
        //hero.move(pender.pos);
    }
}
