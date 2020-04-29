const mongoose = require('mongoose');
const express = require("express");
const router = express.Router();
const users = require("./users.js");
const games = require("./games.js");

const User = users.model;
const Game = games.model;
const validUser = users.valid;


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

router.get('/', validUser, async (req, res) => {
    let gamesList = [];
    console.log(req.user._id)
    try {
        let gamesList = await Game.find({
            isCheckedOutTo: req.user._id
        });
        res.send(gamesList);
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
        tempGame.CheckedOutDate = null;
        tempGame.isCheckedOut = false;
        tempGame.isCheckedOutTo = null;
        tempGame.save();
        res.send(200);
    } catch (error) {
        console.log(error);
        res.sendStatus(500);
    }
});

module.exports = {
    routes: router
}