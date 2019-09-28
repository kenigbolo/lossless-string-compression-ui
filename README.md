# DEVELOPERS GUIDE
This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Getting Started

- Clone the application with
  `git clone https://github.com/kenigbolo/lossless-string-compression-ui.git` or use
  ssh `git clone git@github.com:kenigbolo/lossless-string-compression-ui.git`.

To begin, first start by running `yarn install` or `npm install` to install the needed dependencies

> ⚠️ This project requires the server at https://github.com/kenigbolo/lossless-string-compression to be running

## Available Scripts

In the project directory, you can run:

### `yarn start` or `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `yarn test` or `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn run build` or `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

## Important Caveat
> 🚨 No strict checking is done for string values passed. For the compression/decompression to work properly please use
> comma seperated strings with no spaces inbetween the commas.

## Compression/Decompression

Compression/Decompression can be done through this UI via regular `.txt` file upload or by pasting a comma formatted string

### Sample Compression String - Comma Formatted

```javascript
myxa,myxophyta,myxopod,nab,nabbed,nabbing,nabit,nabk,nabob,nacarat,nacelle
```

### Sample Decompression String - Comma Formatted

```javascript
0 myxa,3 ophyta,5 od,0 nab,3 bed,4 ing,3 it,3 k,3 ob,2 carat,3 elle
```

### Sample Upload File - Compression

`https://github.com/kenigbolo/lossless-string-compression/blob/master/compress.txt`

### Sample Upload File - Decompression

`https://github.com/kenigbolo/lossless-string-compression/blob/master/decompress.txt`