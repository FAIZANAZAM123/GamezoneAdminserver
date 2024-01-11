// column.model.js

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const columnSchema = new Schema({
  columnName: { type: String, required: true },
  dataType: { type: String, enum: ['Y/N', 'Number', 'Decimal', 'Open Text', 'Dual/Solo'], required: true },
  format: { type: String },
});

const Column = mongoose.model('Column', columnSchema);

module.exports = Column;
