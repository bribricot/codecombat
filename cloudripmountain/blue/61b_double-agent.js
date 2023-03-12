/*
Les ogres pensent que le cavalier vous conduira dans le piège. Mais ils ne savent pas qu'il travaille pour nous!

Le cavalier ne peut pas dire où aller directement, c'est pourquoi il utilise des espaces blancs. Les espaces de début et de fin sont invisibles dans les bulles de dialogue.

Comptez-les et utilisez ce nombre pour trouver le passage sûr.

Vous avez appris à utiliser la méthode Trim dans les niveaux précédents.
N'oubliez pas que cette méthode renvoie une copie de la chaîne str sans les espaces de début et de fin.

Si vous rencontrez des problèmes avec ce niveau, essayez les niveaux précédents et revenez après avoir actualisé vos compétences.
*/

// Trouvez le numéro caché dans le message de l'agent pour vous échapper.
// Compte le nombre d'espaces de fin et de début.

// Find the hidden number in the agent's message to escape.
// Count the number of trailing and leading whitespaces.

// This function returns the coordinates of the n-th passage.
function passagePosByNum(n) {
    return {x: 60, y: n * 12 + 8};
}

function onHear(event) {
    // The original message.
    let message = event.message;
    // Trim the message:
    let trimedMessage = message.trim();
    // The hidden number is the difference of lengths:
    let hiddenNumber = message.length - trimedMessage.length;
	// Use passagePosByNum to find the passage to enter:
    let position = passagePosByNum(hiddenNumber);
	// Move the pet to the entrance of the passage:
	pet.moveXY(position.x, position.y);
	// Move the pet to the left edge of the map:
	pet.moveXY(0, position.y); 
}
pet.on("hear", onHear);

// The hero should follow the pet.
while(true) {
    hero.move(pet.pos);
}
