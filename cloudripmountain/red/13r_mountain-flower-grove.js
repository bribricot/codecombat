
hero.drawAmour = function(x, y, size) {
    hero.toggleFlowers(false);
    var cornerOffset = size / 5;
    hero.moveXY(x - cornerOffset, y - cornerOffset);
    hero.toggleFlowers(true);
    hero.moveXY(x + cornerOffset, y - cornerOffset);
    hero.moveXY(x + cornerOffset, y + cornerOffset);
    hero.moveXY(x - cornerOffset, y + cornerOffset);
    hero.moveXY(x - cornerOffset, y - cornerOffset);
};

var amour = {x: 81, y: 59};

hero.drawAmour(amour.x, amour.y, 60);
hero.setFlowerColor("purple");
hero.drawAmour(amour.x, amour.y, 80);
hero.setFlowerColor("yellow");
hero.drawAmour(amour.x, amour.y, 100);
hero.setFlowerColor("pink");
hero.drawAmour(amour.x, amour.y, 130);
hero.setFlowerColor("blue");
hero.drawAmour(amour.x, amour.y, 160);
hero.setFlowerColor("white");
