import mongoose from 'mongoose';
import { PlayerSchema } from '../models/playerModels';

const Player = mongoose.model('Player', PlayerSchema);

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
