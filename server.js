const express = require('express');
const path = require('path');
const fs = require('fs');
// Helper method for generating unique ids
const uuid = require('./helpers/uuid');
const points = require('./helpers/points');

const PORT = 3001;

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));


// POST request to add a receipt
app.post('/receipts/process', (req, res) => {
  // Log that a POST request was received
  console.info(`${req.method} request received`);

  // Destructuring for the items in req.body
  const { retailer, purchaseDate, purchaseTime, total, items } = req.body;

  // If all the required properties are present
  if (retailer && purchaseDate && purchaseTime && total && items) {
    // Variable for the object we will save
    const newReceipt = {
      retailer,
      purchaseDate,
      purchaseTime,
      total,
      items,
      id: uuid(),
    }

    // Convert the data to a string so we can save it
    const receiptString = JSON.stringify(newReceipt);

    // Write the string to a file
    fs.writeFile(`./receipts/${newReceipt.id}.json`, receiptString, (err) =>
      err
        ? console.error(err)
        : console.log(
            `Receipt for ${newReceipt.id} has been saved`
          )
    );

    const response = {
      status: 'success',
      body: newReceipt,
    };

    console.log(response);
    res.status(201).json(response);
  } else {
    res.status(500).json('Error in posting receipt');
  }
});

app.get('/receipts/:id/points', (req, res) => {
  let Receipt;
  
  let data = fs.readFileSync(path.resolve(__dirname, `./receipts/${req.params.id}.json`));
    console.log(data);
    Receipt = JSON.parse(data);
  
  
  // Then you will send it to the points calculator.
  let rewardsPoints = points(Receipt);
  res.status(201).json(rewardsPoints);
});

app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT} 🚀`)
);
