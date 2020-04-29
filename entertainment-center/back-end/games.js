const mongoose = require('mongoose');
const express = require("express");
const router = express.Router();
const users = require("./users.js");

const User = users.model;
const validUser = users.valid;


const gameSchema = new mongoose.Schema({
    isCheckedOutTo: {
        type: mongoose.Schema.ObjectId,
        default: null
    },
    title: String,
    description: String,
    isCheckedOut: {
        type: Boolean,
        default: false
    },
    imagePath: String,
    CheckedOutDate: {
        type: Date,
        default: null
    },
});

const Game = mongoose.model('Game', gameSchema);

router.post('/', validUser, async (req, res) => {
    const game = new Game({
        title: req.body.title,
        description: req.body.description,
        imagePath: req.body.path,
    });
    try {
        await game.save();
        return res.send({
            game: game
        });
    } catch (error) {
        console.log(error);
        return res.sendStatus(500);
    }
});

router.get('/', async (req, res) => {
    try {
        let games = await Game.find();
        res.send(games);
    } catch (error) {
        console.log(error);
        res.sendStatus(500);
    }
});

router.put('/:id', async (req, res) => {
    try {
        let tempGame = await Game.findOne({
            _id: req.params.id
        });
        tempGame.CheckedOutDate = Date.now();
        tempGame.isCheckedOut = true;
        tempGame.isCheckedOutTo = req.body.isCheckedOutTo
        tempGame.save();
        res.send(200);
    } catch (error) {
        console.log(error);
        res.sendStatus(500);
    }
});

module.exports = {
    routes: router,
    model : Game
}