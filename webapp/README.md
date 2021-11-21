# Getting Started with Hospital WebAPP

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Before running the WebAPP

Please ensure you have the latest version of [Node js](https://nodejs.org/en/download/) running before running any of the below commandsd. 

## Available Scripts

In the current project directory, you can run:

Before you install the packages, check the version of node js you have installed using the following command
### `npm --version`

### `npm install`

This will install packages to run the WebAPP. 

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

There, now the WebAPP is up and running. 

### Bugs: 
The submitted webapp is not able to change the patient data record according to input from the user yet. The current display table fetches data from the ipfs data that has already been uploaded from the patient input on the Moralis WebAPP side according to a particular CID that is stated in the jsontotable.jsx script. 

The Download button on the webapp downloads a csv file directly from Web3Storage where a sample hospital record had been stored. We are not yet able to integrate the use of Web3Storage with IPFS on the Patient Input frontend using Moralis at the moment so it is not connected to each other. Hence, the downloaded data may appear different to the one displayed in the json file and table. In future, we hope to connect it to the json table such that it can directly convert the table to a csv file and download with the click of a button so that hospital staff who use this webapp are able to download the patient data and match it with current records of the patient if any. 
