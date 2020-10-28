// How to run: sudo docker run -p 3000:3000 yourDockerContainerName
import express from 'express';

import connectToDatabase from './helpers.mjs'

const app = express();

app.get('/', (req, res) => {
  res.send('<h2>Hi Spock!</h2>');
});

await connectToDatabase();

app.listen(3000);