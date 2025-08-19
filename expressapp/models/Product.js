
const mongoose = require('mongoose');
var ProductSchema = new mongoose.Schema({
  pname: String,
  pdetail: String,
  pprice: Number
});

var ProductModel = mongoose.model('Product', ProductSchema);

module.exports = ProductModel;