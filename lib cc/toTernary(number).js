function toTernary(number) {
    // Start with an empty string.
    var string = "";
    // Then, while the number isn't zero:
    while(number !== 0) {
        // We grab the remainder of our number.
        var remainder = number % 3;
        // This is our iterator method. 'number' decrements here.
        number = (number - remainder) / 3;
        // Append the string to the remainder.
        string = remainder + string;
    }
    // Finally we want to return our constructed string.
    return string;
}