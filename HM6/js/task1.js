let a = [],
    b = [],
    c = [];

a.x = parseFloat(prompt('Enter Ax numeric values'));
a.y = parseFloat(prompt('Enter Ay numeric values'));
b.x = parseFloat(prompt('Enter Bx numeric values'));
b.y = parseFloat(prompt('Enter By numeric values'));
c.x = parseFloat(prompt('Enter Cx numeric values'));
c.y = parseFloat(prompt('Enter Cy numeric values'));

if ((c.x - a.x) / (b.x - a.x) === (c.y - a.y) / (b.y - a.y)) {
    if (c.x === (a.x + b.x) / 2 && c.y === (a.y + b.y) / 2) {
        alert('Point is in center');
    } else {
        alert('Points are on the same line');
    }
} else {
    alert('Points are not on the same line');
}