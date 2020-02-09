import mongoose from 'mongoose';
import { PlayerSchema } from '../models/playerModels';

const Player = mongoose.model('Player', PlayerSchema);

// Function for adding a new player
export const addNewPlayer = (req, res) => {
  let newPlayer = new Player(req.body);
  newPlayer.save((error, Player) => {
    if (error) {
      res.send(error)
    } else {
      res.json(Player)
    }
  });
};

// Function for getting all the players
export const getPlayers = (req, res) => {
  Player.find({}, (error, Player) => {
    if(error) {
      res.send(error)
    }
    res.json(Player)
  });
}
