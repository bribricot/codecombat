// This function finds the BOTTOM-most unit:
function findMostBottom (units) {
    if (units.length === 0) {
        return null;
    }
    var mostBottom = units[0];
    for (var i = 0; i < units.length; i++) {
        if (units[i].pos.y < mostBottom.pos.y) {
            mostBottom = units[i];
        }
    }
    return mostBottom;
}