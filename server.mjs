
import express from 'express';
const app = express();

app.get('/', (req, res) => {
    console.log('Hello world' , new Date());
  res.send('Hello World!' + new Date())
})
app.get('/profile', (req, res) => {
  console.log('this is profile' , new Date());
res.send('this is profile' + new Date())
})

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Example server listening on port ${PORT}`)
})