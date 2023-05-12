const express = require('express');
const routesUser = require('./routes/userRoute');
const routesCategory = require('./routes/categoryRoute');
const routesPost = require('./routes/postRoute');

const app = express();

// não remova ou mova esse endpoint
app.get('/', (_request, response) => {
  response.send();
});

app.use(express.json());

app.use(routesUser);
app.use(routesCategory);
app.use(routesPost);

// É importante exportar a constante `app`,
// para que possa ser utilizada pelo arquivo `src/server.js`
module.exports = app;
