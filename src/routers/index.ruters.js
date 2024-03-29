const {Router} = require('express');
const path = require('path');




const  router = Router();

const multer = require('multer');
const storage = multer.diskStorage({
    destination: path.join(__dirname, '../public/imagenes') ,
    filename:(req, file, cb) => {
        cb(null, file.originalname);
    }
});



router.get('/', (req, res) => {
    res.render('index');
});

const upload = (multer({
    storage,
    dest: path.join(__dirname, 'public/imagenes')
}).single('image'));


router.post('/upload',upload , (req, res) => {
    console.log(req.file);
    res.send('uploaded');
});



module.exports = router;