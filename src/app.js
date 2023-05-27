const express = require('express');
const { engine } = require('express-handlebars');
const morgan = require('morgan');
const route = require('./routes');
const database = require('./config/database');
const methodOverride = require('method-override');
const sortMiddleware = require('./middlewares/sortMiddleware');
const sortViewHelper = require('./helpers/view/sortViewHelper');

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
app.engine(
  'hbs',
  engine({
    extname: '.hbs',
    helpers: {
      sum: (x, y) => x + y,
      sortViewHelper,
    },
  })
);
app.set('view engine', 'hbs');

/**
 * 4. Middlewares:
 * - Express's middlewares.
 * - HTTP request logging: morgan.
 * - HTTP method overriding: method-override.
 */
app.use(express.urlencoded({ extended: true })); // To parse incoming request bodies and make it available on the req.body property.
app.use(express.json()); // To parse incoming JSON request bodies and make the resulting data available on the req.body property of the request object.
app.use(morgan('combined')); // To log request details.
app.use(methodOverride('_method')); // To override HTTP methods.
app.use(sortMiddleware);

/**
 * 5. Routing:
 */
route(app);

/**
 * 6. Connect to database:
 */
database.connect();

/**
 * 7. Start a server and listen on port 3000 for connections:
 */
app.listen(port, () => {
  console.log(`fwk-expressjs app listening on port ${port}`);
});
