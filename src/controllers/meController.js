const UserModal = require('../models/userModel');

class MeController {
  // [GET] /me
  index = (req, res, next) => {};

  // [GET] /me/my-employees
  employees = (req, res, next) => {
    UserModal.find({})
      .then((docs) => {
        const userList = docs.map((doc) => {
          return doc.toObject();
        });
        // res.json(userList);
        res.render('me/my-employees', {
          title: 'My employees',
          style: '/css/user/index.css',
          userList: userList,
          helpers: {
            getListItemNumber: (itemIndex) => itemIndex + 1,
          },
        });
      })
      .catch((error) => {
        next(error);
      });
  };
}

module.exports = new MeController();
