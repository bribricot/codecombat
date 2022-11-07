function findMostLeft (units) {
    if (units.length === 0) {
        return null;
    }
    var mostLeft = units[0];
    for (var i = 0; i < units.length; i++) {
        if (units[i].pos.x < mostLeft.pos.x) {
            mostLeft = units[i];
        }
    }
    return mostLeft;
}