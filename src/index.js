const express = require('express');
const cors = require('cors');
const multer = require('multer');
const sharp = require('sharp');

const app = express();
app.use(cors());

const PORT = 3000










app.listen(PORT, () => {
    console.log('listening on port', PORT)
})