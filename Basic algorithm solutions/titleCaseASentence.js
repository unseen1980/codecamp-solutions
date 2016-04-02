function titleCase(str) {
    return str.split(' ').map(function(acc) {
        return acc.toLowerCase().charAt(0).toUpperCase() + acc.toLowerCase().slice(1);
    }).join(' ');
}
