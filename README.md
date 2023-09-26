# Xgrid MarCom & Design Page

This is a React application for Xgrid's Marcom & Design Page.

# Local Environment
###  Install Dependencies
Run the below command to install project dependencies.

```
$ npm install
```
Then run
```
$ npm start
```
The above command will automatically serve UI on `http://localhost:3000`<br>

Alternatively you can run
```
$ npm run install:clean
```
which will delete node_modules, package-lock.json, automatically run install script, start script and serve the UI on `http://localhost:3000`

# Production Environment
### Build UI
Run the below command to build the UI for production.
```
$ npm run deploy
```
Above command will creates a build directory with a production build of your app. Inside the build/static directory will be your JavaScript and CSS files.