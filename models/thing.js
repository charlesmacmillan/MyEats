var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var thingSchema = new Schema({
  thing: { type: String, required: true },
  user: { type: Schema.Types.ObjectId, ref: "User" },
},{
  timestamps: true
});

module.exports = mongoose.model('Thing', thingSchema);