const express = require('express');
const cors = require('cors');
const multer = require('multer');
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
app.use(multer({
    dest: path.join(__dirname, 'public/imagenes')
}).single('image'));

//Router
app.get('/', (req, res) => {
    res.render('index');
});

app.post('/upload', (req, res) => {
    res.send('uploaded');
});








app.listen(PORT, () => {
    console.log('listening on port', PORT)
})