const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const fs = require('fs');


const app = express();
const PORT = 5000;

app.use(cors());
app.use(bodyParser.json());

// Define a sample route
app.post('/api/data', (req, res) => {

    const data = req.body;
    console.log(data);  
    fs.appendFile('../app/src/assets/data/Solana-data.csv', `${data[0]},${data[1]}\n`, (err) => {
        if (err) throw err;
        console.log('Data saved!');
    }
    );
    res.send({
        status: 'Data received',
        data: data  
    });
    
});


app.listen(PORT, () => {
  console.log(`
  http://localhost:${PORT}
  `);
});
