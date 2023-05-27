const UserModal = require('../models/userModel');

class MeController {
  // [GET] /me
  index = (req, res, next) => {};

  // [GET] /me/my-employees
  employees = (req, res, next) => {
    const fetchParams = {
      deleted_at: undefined,
    };
    const fetch = UserModal.find(fetchParams);
    if (res.locals.mySortCurrent.isEnabled) {
      const sortType = res.locals.mySortCurrent.sortType;
      const sortField = res.locals.mySortCurrent.sortField;
      fetch.sort({ [sortField]: sortType });
    }
    fetch
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
