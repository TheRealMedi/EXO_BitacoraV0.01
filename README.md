# Expertos Bitacora Back-End v.0.01

[![Build Status](https://travis-ci.org/joemccann/dillinger.svg?branch=master)](https://github.com/TheRealMedi/EXO_BitacoraV0.01)
Simple application with a separate backend and frontend was created for capturing and editing partner data.

(Not Finished and left behind for it's remplacement with knex & SQLite3 Version.)

## REST API using Node.js based on MySQL database.
- Node.js
- Express.js
- MongoDB for DataBase
- Mongoose for Shcemas & Controllers
- Babel.js
- Morgan & Nodemon

## Backend Setup
To run this Project, clone it locally, then install dependencies using *NPM*.
The Bitacora Collection which is placed into ./database BSON needs to be imported into docker/MogoDb instance as .agz.
```
$ cd ../backend
$ npm install
$ yarn start
```

```sh
localhost:3000
```

------------

> Every single file, controller,Schema & Router is properly documented within.
So feel free to improve and fix this code only for Expertos Consulting's purpose.