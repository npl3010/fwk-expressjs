const sortMiddleware = (req, res, next) => {
  res.locals.mySortCurrent = {
    isEnabled: false,
    sortType: '',
    sortField: '',
  };

  if (req.query.hasOwnProperty('my_sort')) {
    res.locals.mySortCurrent.isEnabled = true;
    res.locals.mySortCurrent.sortType = req.query.my_sort;
    res.locals.mySortCurrent.sortField = req.query.my_sort_column;
  }

  next();
};

module.exports = sortMiddleware;
