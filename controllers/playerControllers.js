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

// Function for Updating player by ID
export const updatePlayer = (req, res) => {
  const PlayerId = req.params.PlayerId;
  const data = req.body;
  Player.findOneAndUpdate({_id: PlayerId}, data, {new: true}, (error, Player) => {
    if (error) {
      res.send(error)
    } 
      res.json(Player)
  })
}

// Function for gettin player by ID
export const getPlayerById = (req, res) => {
  const PlayerId = req.params.PlayerId;
  Player.findById(PlayerId, (error, Player) => {
    if(error){
      res.send(error)
    }
      res.json(Player)
  })
} 

// Function for getting all the players
export const getPlayers = (req, res) => {
  Player.find({}, (error, Player) => {
    if(error) {
      res.send(error)
    }
    res.json(Player)
  });
}

// Function for deleting player
export const deletePlayer = (req, res) => {
  const PlayerId = req.params.PlayerId;
  Player.deleteOne({_id: PlayerId}, (error) => {
    if(error){
      res.send(error)
    }
    res.json({message: 'Player successfully deleted'})
  })
}
