const express = require('express');
const path = require('path');

const app = express();
const port = 3000;

const staticDir = path.join(__dirname, '..', '/public');

app.use(express.static(staticDir));

app.listen(port, () => { console.log(`Listening on port: ${port}`)});
