function xo(str) {
    var countX = 0;
    var countO = 0;

    for(var i = 0; i < str.length; i++) {
        if(str.charAt(i) === 'x') {
            countX += 1;
        } else if(str.charAt(i) === 'o') {
            countO += 1;
        }
    }
    return (countX === countO);
}

// TEST CASES
console.log(xo('xoxoxo')); // true
console.log(xo('oxooxo')); // false
console.log(xo('oxo')); // false
console.log(xo('xxxooo')); // true
console.log(xo('xoxooxxo')); // true