# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## To set up the project

In the project directory, you need:

###  1. `npm install`
This will install all the requitred dependencies. In order to run it you need to have Node.js on your laptop.
If something goes wrong please try `npm install sass --save-dev`

### 2. `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### [optional] `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

## How to work in this project

Please create your and work on your own branches.

### Structure

In src you will find `pages` folder (files inside will be mainly for routing purposes) and `components` (for importing/exporting), devided into:
- `high level` - for modals, sections, etc
- `low level` - for buttons, inputs, etc

`components` files should start with:
`//Purpose:` comment - explaining why it was created, how it can be used.
`//Example:` comment - reference for the page where it is used

### Example
- `// Purpose: primary button or call to an action`
- `// Examlpe: auth-modal.tsx`
