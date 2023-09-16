# FetchChallenge

Receipt Processor Challenge

Build a webservice that fulfils the documented API given. This is written in Javascript, utilizing express, insomnia, and vscode. Running on http://localhost:3001. The code is able to handle a POST route with the following `http://localhost:3001/receipts/process` to POST receipt bodys. Also uses GET `http://localhost:3001/receipts/:id/points` to acquire the amount of points gained from the receipts.

## Installation

Install Node.js (I'm using v16.20.0) https://nodejs.org/en/download on your computer. If utilizing macOS you and have homebrew use command `brew install node`. 

Install the package.json to be able to utilize express in this package by running `npm i` and this will give you package-lock.json with express now ready for use. Another way to install this dependency is to go `npm install express` 

Start the server.js by making sure you are in the project folder and then in vscode integrated terminal or command prompt/ terminal run `npm start` 

I would also advise installing an API Client such as Postman or Insomnia. For this project I tested with insomnia https://docs.insomnia.rest/insomnia/install you can install here. If you are using a mac and have homebrew run command `brew install --cask insomnia`

## Testing

To test this you can grab any of the simple receipts that were included with the challenge and first POST (`http://localhost:3001/receipts/process`) the body content using API Client and then it will give you an ID to utilize in the GET (`http://localhost:3001/receipts/:id/points`) route for the points 

## Examples 


<img width="1432" alt="Screenshot 2023-09-15 at 7 39 21 PM" src="https://github.com/jxhudson/FetchChallenge/assets/125466051/d06e8b14-470d-4b03-acba-00fc5c724d25">

If you look to the bottom right it creates a unique ID for this receipt. Now we will enter that receipt ID in our GET route for the points associated with them.


<img width="1395" alt="Screenshot 2023-09-15 at 7 40 51 PM" src="https://github.com/jxhudson/FetchChallenge/assets/125466051/12b8d032-e958-4c5c-bf30-e5e289bd8ae1">

Total points are printed off to the right side of the screen
