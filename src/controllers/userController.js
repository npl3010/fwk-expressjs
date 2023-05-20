const UserModal = require('../models/userModel');

class UserController {
  // [GET] /user
  index = (req, res, next) => {
    UserModal.find({})
      .then((docs) => {
        const userList = docs.map((doc) => {
          return doc.toObject();
        });
        // res.json(userList);
        res.render('user/index', {
          title: 'User',
          style: '/css/user/index.css',
          showPageContent: true,
          pageContent: 'USER',
          userList: userList,
          userDetail: false,
        });
      })
      .catch((error) => {
        next(error);
      });
  };

  // [GET] /user/:id
  detail = (req, res, next) => {
    /**
     * Note about the request:
     * - req.query: Get URL query parameters.
     * - req.body: Get request body.
     * - req.params: Get route parameters.
     */
    const userId = req.params.id;
    const fetchParams = {
      _id: userId,
    };
    UserModal.findOne(fetchParams)
      .then((doc) => {
        if (doc) {
          const userDetail = doc.toObject();
          // res.json(userDetail);
          res.render('user/index', {
            title: 'User detail',
            style: '/css/user/index.css',
            showPageContent: true,
            pageContent: 'USER DETAIL',
            userList: false,
            userDetail: userDetail,
          });
        } else {
          res.render('home/index', {
            title: '404',
            style: '/css/home/index.css',
            showPageContent: true,
            pageContent: '404',
          });
        }
      })
      .catch((error) => {
        next(error);
      });
  };

  // [GET] /user/create
  create = (req, res, next) => {
    res.render('user/form', {
      title: 'Add a new user',
      style: '/css/user/form.css',
    });
  };

  // [GET] /user/update/:id
  update = (req, res, next) => {
    /**
     * Note about the request:
     * - req.query: Get URL query parameters.
     * - req.body: Get request body.
     * - req.params: Get route parameters.
     */
    const userId = req.params.id;
    const fetchParams = {
      _id: userId,
    };
    UserModal.findOne(fetchParams)
      .then((doc) => {
        if (doc) {
          const userDetail = doc.toObject();
          // res.json(userDetail);
          res.render('user/form', {
            title: 'Update a user',
            style: '/css/user/form.css',
            userDetail: userDetail,
            queries: '?_method=PUT',
          });
        } else {
          res.render('home/index', {
            title: '404',
            style: '/css/home/index.css',
            showPageContent: true,
            pageContent: '404',
          });
        }
      })
      .catch((error) => {
        next(error);
      });
  };

  // [POST] /user/store
  // [PUT] /user/store/:id
  store = (req, res, next) => {
    /**
     * Note about the request:
     * - req.query: Get URL query parameters.
     * - req.body: Get request body.
     * - req.params: Get route parameters.
     */
    const userId = req.params.id;
    const formData = req.body;
    if (userId) {
      const fetchParams = {
        _id: userId,
      };
      UserModal.updateOne(fetchParams, formData)
        .then((doc) => {
          // res.json(doc);
          res.redirect('/user');
        })
        .catch((error) => {
          // res.json(error);
          res.status(400).send('Bad Request');
        });
    } else {
      const user = new UserModal(formData);
      user
        .save()
        .then((doc) => {
          // res.json(doc);
          res.redirect('/user');
        })
        .catch((error) => {
          // res.json(error);
          res.status(400).send('Bad Request');
        });
    }
  };

  // [DELETE] /user/store/:id
  delete = (req, res, next) => {
    /**
     * Note about the request:
     * - req.query: Get URL query parameters.
     * - req.body: Get request body.
     * - req.params: Get route parameters.
     */
    const userId = req.params.id;
    if (userId) {
      const fetchParams = {
        _id: userId,
      };
      UserModal.deleteOne(fetchParams)
        .then((doc) => {
          // res.json(doc);
          res.redirect('/user');
        })
        .catch((error) => {
          // res.json(error);
          res.status(400).send('Bad Request');
        });
    }
  };
}

module.exports = new UserController();
