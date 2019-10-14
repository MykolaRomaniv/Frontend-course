let a, b, c;

a = parseFloat(prompt('Enter lenth of side A',''));
b = parseFloat(prompt('Enter lenth of side B',''));
c = parseFloat(prompt('Enter lenth of side C',''));

if (a + b > c && a + c > b && b + c > a) {
    switch (true) {
        case a === b && b === c:
            alert('Equivalent triangle');
            break;
        case a === b || b === c || a === c:
            alert('Isosceles triangle');
            break;
        default:
            alert('Normal triangle');
    }
} else {
    alert('Triangle doesn’t exist');
}