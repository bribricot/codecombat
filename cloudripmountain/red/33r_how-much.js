// Calculate the perimeter and the area of the garden
// and pay the fair price for that.

// The prices for fences and lawns.
var fencePrice = 3; // per meter.
var lawnPrice = 2; // per square meter.

// You need the foreman.
var foreman = hero.findNearest(hero.findFriends());
var corners = foreman.corners;

// Get the information about the garden.
var bottomLeft = corners.bottomLeft;
var topRight = corners.topRight;

// Calculate the size of the garden.
var width = topRight.x - bottomLeft.x;
var height = topRight.y - bottomLeft.y;

// Find the perimeter of the garden (meters):
var perimeter = (width + height) * 2;
//hero.say(perimeter);

// Use fencePrice and calculate the fence cost:
fencePrice = fencePrice * perimeter;

// Find the area of the garden (square meters):
var area = (width * height);
//hero.say(area);

// Use lawnPrice and calculate the lawn cost:
lawnPrice = lawnPrice * area;

// The total cost is the sum of the fence and the lawn costs
var totalCost = fencePrice + lawnPrice // Δ Update this with the final price!

hero.say("The total price is " + totalCost);
// Pay the bill.
foreman.bill(totalCost);
