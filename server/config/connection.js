const mongoose = require('mongoose');

mongoose.connect(process.env.MONGODB_URI || 'mongodb+srv://root:Ruby10879@cluster0.qlo0aex.mongodb.net/googlebooks', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  // useCreateIndex: true,
  // useFindAndModify: false,
});

module.exports = mongoose.connection;
