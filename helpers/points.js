 module.exports = () =>
{
let points = 0;

// Rule 1:

// Rule 2:
if (newReceipt.total % 1 === 0)
{
    points += 50;
}

// Rule 3:
if (newReceipt.total % .25 === 0)
{
    points += 25;
}

// Rule 4
points += Math.floor(newReceipt.items.length / 2) * 5;
// Rule 5

// Rule 6

// Rule 7

return points;
}
