function truncateString(str, num) {
    if (num > 3 && num < str.length) {
        return str.slice(0, num - 3) + '...';
    } else if (num >= str.length) {
        return str;
    } else {
        return str.slice(0, num) + '...';
    }
}
