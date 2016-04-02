function destroyer(arr) {
    var eleArgs = [];

    for (var i = 1; i < arguments.length; i++) {
        eleArgs.push(arguments[i]);
    }

    return arr.filter(function(arrNum) {
        return eleArgs.indexOf(arrNum) === -1;
    });
}
