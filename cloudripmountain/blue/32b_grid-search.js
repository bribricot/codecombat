/*
It was written in an old treasure map: 
"Between four trees, between four rocks. The treasure is at the point ?0, ?0.
But the numbers are unreadable!
?O could mean 10, 20, 30... or more!
We found the trees and the rocks, so you need just look over each of the possible points.

Navigate across the field to find the treasure. You have 2 peasants at your disposal. Command them using hero.say to dig up at your location.
Note how the nested for-loops map out the locations you should explore!

let startX = 20;
let endX = 110;
let startY = 30;
let endY = 90;
for(let x = startX; x < endX; x += 10) {
    for(let y = startY; y < endY; y += 10) {
        hero.moveXY(x, y);
            // The hero will move to each tile in a 100x100 square:
                // 10, 10 -> 90, 10
                //   |   ...   |
                //   V   ...   V
                // 90, 10 -> 90, 90
    }
}

The treasure somewhere between trees.
The coordinates are 'x: ?0, y: ?0'. 
Move at all potential points and show to peasants where to dig.
*/
let leftBorder = 20;
let rightBorder = 61;
let bottomBorder = 20;
let topBorder = 51;
let step = 10;

// Iterate X coordinates from the left to right border with step 10.
for (let x = leftBorder; x < rightBorder; x += step) {
    // Use a nested loop to iterate through Y coordinates for each X.
    // Iterate y coordinates from the bottom to top border with step 10.
    
        // Move to the point with coordinates X, Y and say anything.
        
}

// Allow peasants to check the last point.
hero.moveXY(20, 10);
