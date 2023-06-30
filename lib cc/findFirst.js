// * Commentaire normal
// ** Commentaire dénotant les équivalences si on veut commencer par la fin

// * Cette fonction devrait s'appeler findFirst
// ** Et celle-ci findLast

let s1 = "ololos";
let s2 = "olos";

// * Gestion d'erreur 101 : if (s2.length > s1.length) return null;

let i, j = 0;

// ** let i = s1.length - 1;
// ** let j = s2.length - 1;

while (i < s1.length) // ** i > 0
	j = 0;
	// ** j = s2.length - 1 
	while (j < s2.length) // ** j > 0
		while (s2[j] && s1[i + j] = s2[j])
		// * Au lieu de vérifier S2[j] on peut déterminer être arrivé à la fin en établissant que i + j == s2.length ; attention cependant à avoir vérifié au préalable que s2.length < s1.length.
		// ** ce qui donnerait donc j > 0 pour la première méthode, i - j == 0 pour la seconde
			j++; // ** j--
		if (j == s2.length)
		// * ou !s2[j]
		// ** if (j == 0)
			return i;
	i++; // ** i--

// L'index retourné peut être ensuite être réutilisé d'une variété de façons, par exemple comme paramètre "start" de la fonction slice, ce qui permettrait d'émuler le comportement d'une véritable fonction substring sachant que l'on connaît déjà la longeur de s2. Voici => s1.slice(findFirst(s1, s2), s2.length)
// ** s1.slice(findLast(s1, s2), s2.length) :o)

// * Fonctionnement agnostique, réutilisation facilitée par 