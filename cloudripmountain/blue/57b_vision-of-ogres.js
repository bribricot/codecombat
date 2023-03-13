/*
Un seul des ogres dans chaque vague est réel. Détruisez-le et d'autres tomberont.

Vrai ogre =  trois mots dans son nom + a un deuxième prénom qui commence et se termine par la même lettre (sans tenir compte de la casse).

N'oubliez pas d'utiliser la fonction minuscule pour éviter les problèmes de comparaison de cas.

Méthodes importantes :

let words = someStr.split(separator); // Pour obtenir un tableau de mots
let lowerWord = word.toLowercCase(); // To lowercase
let newWord = word.trim(); // Enlever les whitespaces redondants
lowerWord[0]; // The first letter
lowerWord[lowerWord.length-1]; // The last letter

Don't forget to use the lower-case function to avoid case comparison problems.
let word = "Aahz";
hero.say(word[0] == word[1]); // False
word = word.toLowerCase();
hero.say(word[0] == word[1]); // True
*/

// Destroy a real ogre and illusions will disappear.

function findRealEnemy(enemies) {
    for (let i = 0; i < enemies.length; i++) {
        let enemy = enemies[i].id.toLowerCase();
        let words = enemy.split(" ");
        let second = words[1]
 //weeb steves gurzthrot
        if (second[0] === second[second.length - 1])
            return enemies[i];
    }
}

// Only attack real ogres.
while(true) {
    let ogres = hero.findEnemies();
    let realOgre = findRealEnemy(ogres);
    if (realOgre) {
        while(realOgre.health > 0) {
            hero.attack(realOgre);
        }
    }
}
