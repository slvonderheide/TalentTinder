import express from 'express';

const app = express();
const PORT = parseInt(process.env.PORT as string, 10) || 4000;

app.get('/', (_req, res) => {
  res.send('Server is running!');
});

app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`);
});
