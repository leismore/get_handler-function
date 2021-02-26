import express = require('express');
import { get_handler } from '../src/index';

const app  = express();
const port = 8080;

app.get('/', get_handler);

app.listen(port, () => {
  console.log(`@leismore/get_handler testing server, listening at http://localhost:${port}`);
});
