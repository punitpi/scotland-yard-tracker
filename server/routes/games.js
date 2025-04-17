// server/routes/games.js
const express = require('express');
const router = express.Router();
const Game = require('../models/game');

// Create a new game
router.post('/', async (req, res) => {
  try {
    const gameId = Math.random().toString(36).substring(2, 10);
    
    const newGame = new Game({
      gameId,
      players: req.body.players,
      currentTurn: 1,
      status: 'active'
    });
    
    await newGame.save();
    res.status(201).json(newGame);
  } catch (error) {
    console.error('Error creating game:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

// Get game by ID
router.get('/:gameId', async (req, res) => {
  try {
    const game = await Game.findOne({ gameId: req.params.gameId });
    
    if (!game) {
      return res.status(404).json({ message: 'Game not found' });
    }
    
    res.json(game);
  } catch (error) {
    console.error('Error fetching game:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

// Get all games (for testing/admin)
router.get('/', async (req, res) => {
  try {
    const games = await Game.find().sort({ createdAt: -1 });
    res.json(games);
  } catch (error) {
    console.error('Error fetching games:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

module.exports = router;