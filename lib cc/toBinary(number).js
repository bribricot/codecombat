function toBinary(number) {
    var string = "";
    // Go through the steps again:
    while (number !== 0) {
        // Get remainder, decrement, and append string.
        var remainder = number % 2;
        number = (number - remainder) / 2;
        // Remember that binary is another way of saying '2'!
        string = remainder + string;
    }
    return string;
}