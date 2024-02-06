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
