function averageSize(burls) {
    var sum = sumSize(burls);
    // Remember the average is the sum of the parts divided by the amount!
    return sum / burls.length;
}
