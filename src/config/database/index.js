const mongoose = require('mongoose');

const connect = async () => {
  try {
    await mongoose.connect('mongodb://127.0.0.1:27017/fwk_expressjs_db_dev');
  } catch (error) {
    console.log('Failed To Connect To Database!');
  }
};

module.exports = {
  connect,
};
