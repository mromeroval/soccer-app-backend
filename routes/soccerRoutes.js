import {
  addNewPlayer,
  getPlayers,
  getPlayerById
} from '../controllers/playerControllers';

const routes = (app) => {
  app.route('/players')
    // POST endpoint
    .post(addNewPlayer)
    // GET endpoint
    .get(getPlayers)

  // GET player by ID
  app.route('/player/:PlayerId')
  .get(getPlayerById)
}

export default routes;