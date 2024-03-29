const express = require('express');
const cors = require('cors');

const sharp = require('sharp');
const path = require('path');


// Initilizations
const app = express();
app.use(cors());


//setings
const PORT = 3000;
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

//middlewares


//Router
app.use(require('./routers/index.ruters'));








app.listen(PORT, () => {
    console.log('listening on port', PORT)
})