const route = (app) => {
  // Router for '/':
  app.get('/', (req, res) => {
    res.render('home', {
      title: 'Home',
      style: 'css/home/index.css',
      showMyContent: true,
      myContent: 'HOME',
    });
  });
};

module.exports = route;
