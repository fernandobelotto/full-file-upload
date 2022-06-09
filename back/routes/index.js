var express = require('express');
var router = express.Router();
const multer  = require('multer')

const storageEngine = multer.diskStorage({
  destination: 'uploads/',

  filename:   (req, file, cb) => {

    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
    cb(null, uniqueSuffix + "-" + file.originalname)

  }
})

const upload = multer({ storage: storageEngine })

router.post('/',  upload.single('file'),  (req, res, next) => {

  console.log('req.body', req.body)
  console.log('req.file', req.file)

  res.send({ status: 'success'})

});

module.exports = router;