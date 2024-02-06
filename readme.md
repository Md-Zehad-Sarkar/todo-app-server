# Todo App Server

- Client Live link:

## Setup Express

### Technologies

- Express
- MongoDB

#### Make directory

command on your terminal : mkdir project_name

#### Go to your directory

- command on your terminal : cd project_name

#### Initialized your project

- command on your terminal : npm init -y

#### Install express and others you need

- command on your terminal : npm install express cors mongodb dotenv nodemon

#### Open your project

- command on your terminal : code .

#### Create an entry point

- create a file : index.js

- your index.js

const express = require('express');

const cors = require ('cors');

const app = express();

app.use(cors());
app.use(express.json())

//create rest api

app.get('/', (req, res) => {
res.send('Successful response.');
});

app.listen(port, () => console.log(`Example app is listening on port ${port}.`));

#### Open package.json and edit script properties

"scripts": {
"start": "node index.js",
},

#### Run your server

- command on your terminal : npm run start

# CRUD operation

- C: Create / Post
- R: Read / Get
- U: Update / Patch/Put
- D: Delete / Delete

# Vercel Deploy Process express server (javascript)

- create a vercel.json file in your root directory
- write this code in your vercel.json

{
  "version": 2,
  "builds": [
    {
      "src": "index.js",
      "use": "@vercel/node",
      "config": { "includeFiles": ["dist/**"] }
    }
  ],
  "routes": [
    {
      "src": "/(.*)",
      "dest": "index.js",
      "methods": ["GET", "POST", "PUT", "DELETE", "PATCH", "OPTIONS"],
      "headers": {
        "Access-Control-Allow-Credentials": "true",
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "GET,OPTIONS,PATCH,DELETE,POST,PUT",
        "Access-Control-Allow-Headers": "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version"
      }
    }
  ]
}


- Make sure your script "start": "node index.js", in package.json . index.js not mandatory your file name but you make sure your right path for start your server in package.json

  "scripts": {
  "start": "node index.js",
  "dev": "nodemon index.js",
  "test": "echo \"Error: no test specified\" && exit 1"
  },

- now ready to deploy 
- Make sure your are logged in with vercel
- now command