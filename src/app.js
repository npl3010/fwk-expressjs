const express = require('express');
const { engine } = require('express-handlebars');
const morgan = require('morgan');
const route = require('./routes');

const app = express();
const port = 3000;

/**
 * 1. Serve static files in Express:
 * localhost:3000/images/me.jpg
 */
app.use(express.static('public'));

/**
 * 2. Specify the views directory:
 */
app.set('views', 'src/views');

/**
 * 3. Setup template engines (view engines):
 */
app.engine('hbs', engine({ extname: '.hbs' }));
app.set('view engine', 'hbs');

/**
 * 4. Middlewares:
 * - HTTP request logging: morgan.
 */
app.use(morgan('combined'));

/**
 * 5. Routing:
 */
route(app);

/**
 * 6. Start a server and listen on port 3000 for connections:
 */
app.listen(port, () => {
  console.log(`fwk-expressjs app listening on port ${port}`);
});
