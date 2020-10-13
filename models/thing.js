var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var thingSchema = new Schema({
  thing: { type: String, required: true },
},{
  timestamps: true
});

module.exports = mongoose.model('Thing', thingSchema);