import {
  addNewPlayer,
  getPlayers,
  getPlayerById,
  updatePlayer,
  deletePlayer
} from '../controllers/playerControllers';

const routes = (app) => {
  app.route('/players')
    // POST endpoint
    .post(addNewPlayer)
    // GET endpoint
    .get(getPlayers)

  app.route('/player/:PlayerId')
    // GET player by ID
    .get(getPlayerById)
    // UPDATE player by ID
    .put(updatePlayer)
    // DELETE player by ID
    .delete(deletePlayer)
}

export default routes;