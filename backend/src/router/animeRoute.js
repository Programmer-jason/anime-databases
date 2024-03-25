const express = require('express');
const router = express.Router();
const multer  = require('multer')
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, '../frontend/public/uploads')
    },
    filename: function (req, file, cb) {
      const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
      cb(null, file.originalname)
    }
  })
const upload = multer({ storage: storage })

const Anime = require('../model/anime_lover.model');

router.get('/listanime', async (req, res) => {
    try {
        const add_favorite = await Anime.find();
        res.status(200).json(add_favorite);
    }
    catch(error){
        res.status(200).json({message: error.message});
    }
})

router.post('/addanime', async (req, res) => {
    try {
        const add_favorite = await Anime.create(req.body);
        res.status(200).json(add_favorite);
    }
    catch(error){
        res.status(200).json({message: error.message});
    }
})

router.post('/uploads', upload.single('file'), async (req, res) => {
    const ext = ['image/png', 'image/jpg', 'image/jpeg', 'image/gif']
    console.log(req.file)
    if(req.file != undefined){
        if(!ext.includes(req.file.mimetype)){
            return res.json({message: 'only png, jpg, jpeg, gif'})
        }

       return res.status(200).json({message: 'File Successfully Uploaded'})
    }
    else{
        res.json({message: 'File Not Found'})
    }
})

module.exports = router
