// Be aware of hidden traps, and count your steps
// Coins are separated by 10 meters distance

var steps = 1;

while (true) {
    // If the number of steps is divisible by 3 AND by 5 -- move to North-West
    
    // Else if the number of steps is divisible by 3 -- move to East
    
    // Else if the number of steps is divisible by 5 -- move to West
    
    // Else move to North
    
    hero.moveXY(hero.pos.x, hero.pos.y + 10);
    
    steps += 1;
}
