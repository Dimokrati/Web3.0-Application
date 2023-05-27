const express = require('express');
const fs = require('fs');
const csv = require('fast-csv');
const tf = require('@tensorflow/tfjs-node');
const path = require('path');
const cors = require('cors');
const { parse, format ,addDays } = require('date-fns');

const app = express();
const PORT = 3000;

app.use(express.json());
app.use(cors());

const loadModel = async (input) => {
  const modelPath = path.resolve(__dirname, '../app/src/assets/tfjs_model/model.json');
  const model = await tf.loadLayersModel(`file://${modelPath}`);
  const scaled_input = tf.tensor(input).div(255.0);
  const prediction = model.predict(scaled_input);
  const realPrediction = prediction.mul(255.0);
  const predictionValue = Number(await realPrediction.data());
  return predictionValue.toFixed(3);
};

app.post('/api/data', async (req, res) => {

  const rows = [];
  fs.createReadStream('../app/src/assets/data/Solana-data.csv').pipe(csv.parse({ headers: true }))
    .on('data', (row) => {
      rows.push(row);
    })
    .on('end', async () => {
      const prices = rows.map((row) => Number(row.Price));
      const dates = rows.map((row) => {
        const parsedDate = parse(row.Date, 'dd-MMM-yy', new Date());
        return format(parsedDate, 'dd-MMM-yy');
      });

      const price_prediction = [];
      for (let index = 0; index < 12; index++) {
        price_prediction.push([prices[prices.length - index - 1]]);
      }

      const prediction = await loadModel([price_prediction]);
      const next_day = addDays(
        new Date(dates[dates.length - 1]),
        1
      )
      const formattednextDate = format(next_day, 'dd-MMM-yy');

      const new_row = [formattednextDate, prediction];
      const newRowString = `${new_row.join(',')}\n`;
      fs.appendFile(
        '../app/src/assets/data/Solana-data.csv',
        newRowString,
        (err) => {
          if (err) throw err;
        }
      );
      // send the last 30 days data
      const last30Days = rows.slice(rows.length - 100, rows.length);
      res.json(last30Days);
  
    });
});

app.listen(PORT, () => {
  console.log(`
  http://localhost:${PORT}
  `);
});
