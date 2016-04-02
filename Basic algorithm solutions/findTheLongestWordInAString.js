function findLongestWord(str) {
    var longest = '';
    str.split(' ').forEach(function(acc) {
        if (acc.length > longest.length) {
            longest = acc;
        }
    });
    return longest.length;
}
