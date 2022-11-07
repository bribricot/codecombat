// Move in sync with your dance partner to impress Pender Spellbane.

//Find friends
//Find offset between you and the nearest friend
// While moving, stay in position relative to this nearest friend

var friend = hero.findNearest(hero.findFriends());

var offsetY = friend.pos.y - hero.pos.y;
var offsetX = friend.pos.x - hero.pos.x;

// DIFFERENTES OPTIONS ICI POUR EVITER LES VALEURS NEGATIVES SI ON EST AU DESSUS, MÊME SI CELA NE CHANGE RIEN

// var offset = (friend.pos.y > hero.pos.y) ? friend.pos.y - hero.pos.y : hero.pos.y - friend.pos.y; METHODE TERNAIRE

// var offset = friend.pos.y - hero.pos.y; 
// if (offset < 0)
//  offset = -offset;  METHODE INVERSION

// var offset = Math.abs(friend.pos.y - hero.pos.y); METHODE LIBRAIRIE


while(true)
    hero.move({x: friend.pos.x - offsetX, y: friend.pos.y - offsetY });

// SI ON VEUT DANSER AVEC LE CORBEAU

// function dance() {
//    while (true)
//        pet.moveXY(hero.pos.x - offsetX, hero.pos.y - offsetY);
// }

// pet.on("spawn", dance);
