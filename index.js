import express from 'express';

const app = express();
const PORT = 3000;

app.get('/',(req, res) => {
  res.send(`Soccer App is running on port ${PORT}`)
})

app.listen(PORT, () => {
  console.log(`Soccer server running on port ${PORT}`)
})