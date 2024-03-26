// Find the soldiers who break the circle.

// All soldiers should be on the circle with the radius:
let circleRadius = 20;

// The function checks if an unit is placed on the circle
// with the radius with the hero in the center.
function onCircle(unit, radius) {
    let distance = hero.distanceTo(unit);
    // We check the approximation.
    let inaccuracy = 2;
    let minDistance = radius - inaccuracy;
    let maxDistance = radius + inaccuracy;
    return distance <= maxDistance && distance >= minDistance;
}

while(true) {
    let soldiers = hero.findByType("soldier");
    for (let i = 0; i < soldiers.length; i++) {
        // Use onCircle function to find
        // if the soldier is not on the circle:
        onCircle(soldiers[i], 18);
            // Then say their name (`id`) to get rid of that one:
            hero.say(soldiers[i].id);
    }
}
