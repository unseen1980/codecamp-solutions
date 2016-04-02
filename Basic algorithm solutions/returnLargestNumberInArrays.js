function largestOfFour(arr) {
    return arr.map(function(arrayN) {
        return arrayN.reduce(function(fNum, nNum) {
            return fNum < nNum ? nNum : fNum;
        });
    });
}
