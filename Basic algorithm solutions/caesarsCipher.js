function rot13(str) {
    var encoded = '';
    for (var i = 0; i < str.length; i++) {
        if (str[i].charCodeAt(0) >= 65 && str[i].charCodeAt(0) < 78) {
            encoded += String.fromCharCode(str[i].charCodeAt(0) + 13);
        } else if (str[i].charCodeAt(0) >= 78 && str[i].charCodeAt(0) <= 90) {
            encoded += String.fromCharCode(str[i].charCodeAt(0) - 13);
        } else {
            encoded += str[i];
        }
    }
    return encoded;
}
