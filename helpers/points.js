module.exports = (Receipt) => {
  let points = 0;

  // Rule 1:
  var X = Receipt.retailer;
  points += X.replace(/[^a-zA-Z0-9]/gi, "").length;

  // Rule 2:
  if (Receipt.total % 1 === 0) {
    points += 50;
  }

  // Rule 3:
  if (Receipt.total % 0.25 === 0) {
    points += 25;
  }

  // Rule 4
  points += Math.floor(Receipt.items.length / 2) * 5;

  // Rule 5
  var tempitems = Receipt.items;
  for (i = 0; i < tempitems.length; i++) {
    var item1 = tempitems[0];
    z = item1.shortDescription.trim();
    a = z.length;
    if (a % 3 === 0) {
      points += Math.ceil(item1.price * 0.2);
    }
  }

  // Rule 6
  var dayPurchased = new Date(Receipt.purchaseDate);
  if (dayPurchased.getDate() % 2 !== 0) {
    points += 6;
  }

  // Rule 7
  var timePurchased = Receipt.purchaseTime;
  if (timePurchased > 14 && timePurchased < 16) {
    points += 10;
  }

  return points;
};
