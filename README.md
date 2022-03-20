# Form generation application

## About application
form-generator application is responsible for generating an HTML form which can include any number of fields. Every field may by one of the next types: `number`, `text`, `textarea`, `date`, `checkbox`, `radio`. 
Every form can also have any number of buttons.

## Creating form
1. start application (`npm start`)
2. open a tab, which is responsible for configuring a form. 
3. enter valid json, in a format: {"items": [{ "label": "someFieldName", "type": "any permitted field type"}], "buttons": ["someButtonName"]}
4. click "apply" or switch to a 'result' tab


## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test:watch`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

