import express from 'express';
import mongoose from 'mongoose';
import bodyparser from 'body-parser';
import routes from './routes/soccerRoutes';

const app = express();
const PORT = 3000;

// Mongo connection
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/soccerDB', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})

// bodyparser
app.use(bodyparser.urlencoded({ extended:true}));
app.use(bodyparser.json());

routes(app);

app.get('/',(req, res) => {
  res.send(`Soccer App is running on port ${PORT}`)
})

app.listen(PORT, () => {
  console.log(`Soccer server running on port ${PORT}`)
})