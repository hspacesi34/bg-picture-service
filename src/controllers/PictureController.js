const PictureModel = require('../models/PictureModel');
const multer = require('multer');
const uuidv4 = require('uuid/v4');

exports.createPicture = async (req, res) => {
    
    console.log(req.file);
    await PictureModel.create({
        src: req.file.filename
    }).then(response => res.send(response)).catch(err => res.send('erreur '+err))
}