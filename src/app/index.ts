import express from 'express';
import {LineService} from './services/Line.service';

const app = express();
const port = 3000;
const lineService = new LineService();

app.get('/', (req, res) => {
  res.send('Douglas!!!!!!!');
  lineService.sendPush('test');
});

app.listen(port, () => {
  console.log(`Douglasss app listening on port ${port}!`);
});