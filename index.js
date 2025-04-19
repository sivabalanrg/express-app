import express from 'express';
const app = express();

app.use(express.json())

app.get('/', (req, res) => {
  res.send('Hello World v2!')
})


app.listen(3000, () => {
  console.log('Server started', 3000)
})
