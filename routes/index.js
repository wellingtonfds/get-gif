var express = require('express');
var router = express.Router();

import textController from '../controller/text.controller'
/* GET home page. */

router.get('/:word', (req, res, next) => textController.getGifsByText(req, res, next))

module.exports = router;