function (burls) {
    // Implement the sum function using the burls 'size'
    var total = 0;
    for (var i = 0; i < burls.length; i++) {
        total += burls[i].size;
    }
    return total;
}