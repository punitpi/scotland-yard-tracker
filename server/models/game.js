const mongoose = require('mongoose');

const gameSchema = new mongoose.Schema({
  gameId: {
    type: String,
    required: true,
    unique: true
  },
  players: [{
    id: String,
    name: String,
    color: String,
    isMrX: Boolean,
    currentPosition: Number,
    moveHistory: [{
      turn: Number,
      position: Number,
      transportType: String,
      visible: Boolean
    }]
  }],
  currentTurn: {
    type: Number,
    default: 1
  },
  status: {
    type: String,
    enum: ['active', 'completed', 'abandoned'],
    default: 'active'
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Game', gameSchema);