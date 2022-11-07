// Advance through the forgotten tomb.
// Be wary, traps lay in wait to ruin your day!

// The Paladins volunteer to lead the way.
// Command them to shield against incoming projectiles.
while(true) {
    var friends = hero.findFriends();
    // findEnemyMissiles finds all dangerous projectiles.
    var projectiles = hero.findEnemyMissiles();
    for(var i = 0; i < friends.length; i++) {
        var friend = friends[i];
        if(friend.type == "paladin") {
            // Find the projectile nearest to the friend:
            
            // If the projectile exists
            // AND is closer than 10 meters to the paladin:
            
                // Command the friend to "shield":
                
            // ELSE, when there is no potential danger:
            
                // Advance the paladin:
                
        } else {
            // If not a paladin, just advance:
            
        }
    }
    // Advance the hero in the x direction:
    
}
