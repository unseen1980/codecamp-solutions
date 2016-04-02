function palindrome(str) {
    var c = str.toLowerCase();
    c = c.replace(/[^A-Za-z0-9]/g, '');
    var revc = c.split('').reverse().join('');
    return c == revc;
}
