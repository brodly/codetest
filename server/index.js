const express = require('express');
const path = require('path');
const api = require('./routes');

const app = express();
const port = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, '..', '/public')));
app.use('/api', api);

app.listen(port, () => { console.log(`Listening on port: ${port}`); });
