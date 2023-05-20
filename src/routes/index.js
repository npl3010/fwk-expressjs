const userRouter = require('./user');
const meRouter = require('./me');

const route = (app) => {
  // Router for '/user':
  app.use('/user', userRouter);
  // Router for '/me':
  app.use('/me', meRouter);
  // Router for '/':
  app.get('/', (req, res) => {
    res.render('home/index', {
      title: 'Home',
      style: '/css/home/index.css',
      showPageContent: true,
      pageContent: 'HOME',
    });
  });
};

module.exports = route;
