let twoPi = 2 * Math.PI;

// Here are some functions for drawing shapes:
function degreesToRadians(degrees) {
    return (degrees/360)*twoPi;
}

function drawPolyStars(center, radius, sides, skips, startAngle) {
    hero.toggleFlowers(false);
    let angle = startAngle;
    let x = center.x;
    let y = center.y;
    let hoops = skips + 1;
    let stepAngle = hoops * (twoPi / sides);
    if(skips !== 0 && (sides % hoops) === 0) {
        hoops = skips;
    }
    let endAngle = (twoPi * hoops) + startAngle;
    while(angle <= endAngle) {
        let newX = x + radius * Math.cos(angle);
        let newY = y + radius * Math.sin(angle);
        hero.moveXY(newX, newY);
        hero.toggleFlowers(true);
        angle += stepAngle;
    }
}

function drawStar(center, radius, sides, skips, startAngle) {
    let skipsPlusOne = skips + 1;
    if ((sides/skipsPlusOne) != 1 && (sides%skipsPlusOne) === 0) {
        let index = skips;
        while(index >= 0) {
            let angle = startAngle + index * (twoPi / sides);
            drawPolyStars(center, radius, sides, skips, angle);
            index -= 1;
        }
    } else {
        drawPolyStars(center, radius, sides, skips, startAngle);
    }
}

function drawPolygon(center, radius, sides, startAngle) {
    drawPolyStars(center, radius, sides, 0, startAngle);
}

function drawSpokes(center, radius, sides, startAngle) {
    let x = center.x;
    let y = center.y;
    let endAngle = twoPi + startAngle;
    let stepAngle = twoPi / sides;
    let angle = startAngle;
    while(angle < endAngle) {
        let newX = x + radius * Math.cos(angle);
        let newY = y + radius * Math.sin(angle);
        if((hero.pos.x|0) == (x|0) && (hero.pos.y|0) == (y|0)) {
            hero.toggleFlowers(true);
            hero.moveXY(newX, newY);
        } else {
            hero.toggleFlowers(false);
            hero.moveXY(newX, newY);
            hero.toggleFlowers(true);
            hero.moveXY(x, y);
        }
        hero.toggleFlowers(false);
        angle += stepAngle;
    }
}

function drawSpiral(center, size, loopNum, startAngle) {
    let newX, x = center.x;
    let newY, y = center.y;
    hero.toggleFlowers(false);
    hero.moveXY(x, y);
    hero.toggleFlowers(true);
    let steps = size * 2;
    let direction = Math.sign(loopNum);
    let stepAngle = twoPi / steps / direction;
    let loops = direction * loopNum;
    let stepSize = size / steps / loops;
    let curSize = 0;
    let angle = startAngle;
    let endAngle = (twoPi * loopNum) + startAngle;
    while(loopNum<0 ? (angle>=endAngle) : (angle<=endAngle)) {
        newX = x + curSize * Math.cos(angle);
        newY = y + curSize * Math.sin(angle);
        hero.moveXY(newX, newY);
        angle += stepAngle;
        curSize += stepSize;
    }
    newX = x + size * Math.cos(endAngle);
    newY = y + size * Math.sin(endAngle);
    hero.moveXY(newX, newY);
}

let redX = {x: 28, y: 36};
let whiteX = {x: 60, y: 36};

/*
setFlowerColor

 Draw a "3D style" box, using the drawPolygon and drawSpokes functions, centered on the red X and with a size of 10.
 The simplest startAngles to calculate would be either "up" or "down".
 The drawing functions deal with angles in terms of radians. If you think in terms of degrees then please use the "degreesToRadians(degrees)" function so they can understand you.
drawPolygon(center, size, number of sides, start angle)

drawSpokes(center, size, number of spokes, start angle)

 Draw the star bib, using the drawStar and drawSpiral functions. (See the Guide for an image of the shapes.)
 The star is centered on the white X and has a size of 6.
 The spirals have a size of 15. To get a spiral to go the other direction give it a negative number of loops.
setFlowerColor

drawStar(center, size, sides, skips, startAngle)

setFlowerColor

drawSpiral(center, size,  number of loops, start angle)

drawSpiral(center, size,  number of loops, start angle)
