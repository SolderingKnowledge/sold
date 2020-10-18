# SOLD PLATFORM
Ideal platform for everyone.
### FULL STACK APPLICATION


```bash
npx create-react-app client
npm init -y #initilize package.json
npm i express #install express
node server/index #run localhost:5000 => running backend
npm i -D nodemon concurrently #install as dev devDependencies(it is during development)
#with -D flag it installs in package.json as bellow:
npm i dotenv #for easily managing environment variables
npm i mongoose # object mapper!For querying your DB.Allows you to  define the structure of your collections through schemas!
npm i colors #add colors to your console. Optional!
npm i bcryptjs #encrypt passwords
npm i express-async-handler #Simple middleware for handling exceptions inside of async express routes and passing them to your express error handlers
```
```json
"devDependencies": {
    "concurently": "version",//allows to run both client and server
    "nodemon": "version",//constantly watching
}
```
## `package.json` rules:
```json
"scripts": {
    "server": "node server/index", //tell nodeJs to run server/index.js file
    "client": "npm start --prefix client", //tell npm to go to client folder(--prefix) and then run npm start
    "watchServer": "nodemon server/index", //tell nodemon to run server in watch mode
    "both": "concurrently \"npm run watchServer\" \"npm run client\"", //tell concurrently to run "npm run watchServer" "npm run client"
},
```
```json
{
    "type": "module", //using ES6 syntax for import export in nodejs environment
}
```