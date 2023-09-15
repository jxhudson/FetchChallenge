module.exports = (Receipt) => {
  let points = 0;

  // Rule 1:
  var X = Receipt.retailer;
  points += X.replace(/[^a-zA-Z0-9]/g, "").length;

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
  Receipt.items.forEach((items) => {
    var shortDescriptionTrim = items.shortDescription.trim().length;
    if (shortDescriptionTrim % 3 === 0) {
        points += Math.ceil(items.price * .2);
    }
})

  // Rule 6
  var dayPurchased = new Date(Receipt.purchaseDate).getDay();
  if (dayPurchased % 2 === 1) {
    points += 6;
  }

  // Rule 7
var purchaseTimeSplit = Receipt.purchaseTime.split(":");
var purchaseMinute = parseInt(purchaseTimeSplit[1], 10);
var purchaseHour = parseInt(purchaseTimeSplit[0], 10);

if (purchaseHour > 14 || purchaseHour === 14 && purchaseMinute > 0 && purchaseHour < 16) {
    points += 10;
}

  return points;
};
