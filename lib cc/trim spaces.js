
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