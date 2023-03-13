/*
Certains de nos paysans sont pastYetis et ils vont bientôt se transformer.

Traite la liste désordonnée de noms du sergent et envoie des shapeshifters dans le camp des ogres.

De manière générale, les données ne sont pas clean et doivent être traitées avant de pouvoir être utilisées.

Par exemple, dans ce niveau, les noms de la liste sont séparés par des virgules et comportent des espaces excessifs. Ils sont désordonnés. 

Pour obtenir des noms clean, nous devons split() la liste avec des virgules, puis la trim() de ces espaces blancs du début et de la fin pour chaque mot.

let someList = "  words  , split  ,weird,  way";
let words = someList.split(",");
let secondWord = words[1];
console.log(secondWord); // " split  " -> excess whitespace.
let cleanedSecondWord = secondWord.trim();
console.log(cleanedSecondWord); // "split" -> it's better.
*/

// You need to defeat ogres.
// Send wereyeti peasants to the ogre camp and watch.

// This function returns a friendly unit by the name.

function findFriendByName(name) {
	let friends = hero.findFriends();
	for (let i = 0; i < friends.length; i++) {
	    if (friends[i].id === name) {
	        return friends[i];
	    }
	}
	return null;
}
// The sergeant wrote the list of wereyeti peasants' names.
let sergeant = hero.findNearest(hero.findFriends());
let wereList = sergeant.wereList;
// The list isn't clean and contains redundant spaces. 
let wereNames = wereList.split(",");
// Iterate through wereNames array:
for (let i = 0; i < wereNames.length; i++) {
	// Store a name from the array in a variable, trim the whitespace from the name.
	let trimedNames = wereNames[i].trim();
	// Save it in the new variable, use findFriendByName function to find a fake yeti:
	let fakeYetis = findFriendByName(trimedNames);
	// Command that fake unit to kill them all to the ogre camp:
	hero.command(fakeYetis, "move", {'x':48, 'y':48});
}