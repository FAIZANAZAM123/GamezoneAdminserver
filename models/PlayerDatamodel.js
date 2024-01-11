// playerData.model.js

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const playerDataSchema = new Schema({
  player: { type: Schema.Types.ObjectId, ref: 'Player', required: true },
  column: { type: Schema.Types.ObjectId, ref: 'Column', required: true },
  value: { type: Schema.Types.Mixed }, // Mixed type can store various data types
});

const PlayerData = mongoose.model('PlayerData', playerDataSchema);

module.exports = PlayerData;
