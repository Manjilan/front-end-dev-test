var mongoose = require('mongoose'),
Schema = mongoose.Schema;

var MessageSchema = new Schema({
  name: { type: String, required: true },
  email: {type: String, required: true},
  phone: String,
  message: String
});

var Message = mongoose.model('Message', MessageSchema);

module.exports = Message;
