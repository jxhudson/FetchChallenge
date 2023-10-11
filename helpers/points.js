  module.exports (receipts) => {
  // Rule 1:
  Rule1 = () => {
  var X = receipts.retailer;
  points += X.replace(/[^a-zA-Z0-9]/g, "").length;

  return points
  };


  // Rule 2:
  Rule2 = () => {
  if (receipts.total % 1 === 0) {
    points += 50;
  }
  return points};

  // Rule 3:
  Rule3 = () => {
  if (receipts.total % 0.25 === 0) {
    points += 25;
  }
  return points };

  // Rule 4
  Rule4 = () => {
  points += Math.floor(receipts.items.length / 2) * 5 

  return points };

  // Rule 5
  Rule5 = () => {
  receipts.items.forEach((items) => {
    var shortDescriptionTrim = items.shortDescription.trim().length;
    if (shortDescriptionTrim % 3 === 0) {
        points += Math.ceil(items.price * .2);
    }
  })
    return points };

  // Rule 6
  Rule6 = () => {
  var dayPurchased = new Date(receipts.purchaseDate).getDay();
  if (dayPurchased % 2 === 1) {
    points += 6;
  }

  return points};

  // Rule 7
  Rule7 = () => {
  var purchaseTimeSplit = receipts.purchaseTime.split(":");
  var purchaseMinute = parseInt(purchaseTimeSplit[1], 10);
  var purchaseHour = parseInt(purchaseTimeSplit[0], 10);

  if (purchaseHour > 14 || purchaseHour === 14 && purchaseMinute > 0 && purchaseHour < 16) {
    points += 10;
  }
  return points };

};
