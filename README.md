# sold
Ideal platform for everyone.


```bash
npx create-react-app client
npm init -y #initilize package.json
npm i express #install express
node server/index #run localhost:5000 => running backend
npm i -D nodemon concurrently #install as dev devDependencies(it is during development)
#with -D flag it installs in package.json as bellow:
npm i dotenv #for easily managing environment variables
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