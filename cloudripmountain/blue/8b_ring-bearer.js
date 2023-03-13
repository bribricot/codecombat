/*
Pour ce niveau, vous devez utiliser les 2 fonctions fournies pour calculer où un soldat doit se déplacer, afin de former un cercle de soldats autour du paysan. Vous devez escorter un puissant anneau magique jusqu'en ville pour être étudié. Le but est de s'échapper, pas de se battre. D'autres ogres se cachent dans les montagnes environnantes ! Faites un cercle de soldats autour du paysan !

Utilise la fonction "findSoldierOffset(soldiers, i)" pour trouver le (décalage radial) d'un soldat.

Ajoute ce nombre à la position du paysan pour créer une zone de protection circulaire autour du paysan portant l'anneau! Pour calculer où le soldat doit se déplacer, ajoute le décalage radial (offset) à la position du paysan comme ceci :

moveTo = {"x": paysan.pos.x + décalage.x, "y": paysan.pos.y + décalage.y}
hero.command(soldat, "move", moveTo);

1) findSoldierOffset(soldiers, i) : détermine la position à laquelle un soldat doit se tenir par rapport au paysan. Le premier argument "soldiers" est le tableau contenant tous vos soldats. Le deuxième argument "i" est l'index du soldat (dans le tableau des soldats) pour lequel vous voulez trouver la position de décalage radial (offset). Cette fonction renvoie un objet {x, y} contenant la position décalée que le soldat à la position "i" doit avoir, par rapport au paysan.

2) radialToCartesian(radius, degrees) : fait le calcul pour déterminer le décalage auquel un soldat doit se tenir.
*/

function findSoldierOffset(soldiers, i) {
    let soldier = soldiers[i];
    let angle = i * 360 / soldiers.length;
    return radialToCartesian(5, angle);
}

function radialToCartesian(radius, degrees) {
    let radians = Math.PI / 180 * degrees;
    let xOffset = radius * Math.cos(radians);
    let yOffset = radius * Math.sin(radians);
    return {x: xOffset, y: yOffset};
}

let peasant = hero.findByType("peasant")[0]
// Use findByType to get an array of your soldiers.
let soldiers = hero.findByType("soldier");

while (true) {
	for (let i = 0; i < soldiers.length; i++) {
		// Find the offset for a soldier. 
	    let offset = findSoldierOffset(soldiers, i);
		//Separate the x and y offsets so that it works for the object format requested during the command "move".
	    let offsetX = offset.x + peasant.pos.x; //Add the offset.x to the peasant's pos.x.
	    let offsetY = offset.y + peasant.pos.y; //Add the offset.y to the peasant's pos.y.
	    // Command the soldier to move to the new offset position.
	    hero.command(soldiers[i], "move", {x: offsetX, y: offsetY})
	}
    hero.move({"x": hero.pos.x + 0.2, "y": hero.pos.y})
}