var express = require('express');
var router = express.Router();
const request = require('request');
//corsミドルウェアを追加
const cors = require('cors');

//corsミドルウェアを有効化
router.use(cors());

router.get('/', async (req, res) => {
	request('https://api.thecatapi.com/v1/images/search', function (error, response,
	body) {
		if (!error && response.statusCode == 200) {
			const data = JSON.parse(body);
			res.json(data);
		}
	});
})
module.exports = router;