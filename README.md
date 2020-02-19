## Description

A working sample by cube.js + mongodb

## How was the project created? And how to run it?

We have followed this link: https://cube.dev/blog/building-mongodb-dashboard-using-node.js. We highlight some important points here.

- mongodb needs to be running

- start mongosqld

```
$ bin/mongosqld
```

- initiate the folder
```
$ cubejs create mongo-tutorial -d mongobi
```

- modify `.env`
```
CUBEJS_DB_HOST=localhost
CUBEJS_DB_NAME=test
CUBEJS_DB_PORT=3307
#CUBEJS_DB_USER=<YOUR_DB_USER_HERE>
#CUBEJS_DB_PASS=<YOUR_DB_PASS_HERE>
CUBEJS_WEB_SOCKETS=true
CUBEJS_DB_TYPE=mongobi
CUBEJS_API_SECRET=...
...
```

- generate `schema/Zips.js`
```
$cubejs generate -t zips
```

- as a result, after `npm run dev`, we could launch `http://localhost:4000` in a browser

- add a React project in the browser. Thus, `dashboard-app` is generated under `mongo-tutorial`

- under `dashboard-app`, we need to add `core-js`, otherwise, it would give an error running the dashboard `Module not found: Can't resolve 'core-js/modules/es6.array.filter'`

```
npm install core-js@2 --save
```

- as a result, after `npm run start`, we could launch `http://localhost:3000` in a browser

- Replace `src/index.js` by the code in https://cube.dev/blog/building-mongodb-dashboard-using-node.js (remember to change the `CUBEJS_API_SECRET`), and then we could see the "Zip count by state" pie chart under `http://localhost:3000`.
