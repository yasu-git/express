var express = require('express');
var router = express.Router();
const request = require('request');

router.get('/', async (req, res) => {
	request('https://yesno.wtf/api', function (error, response,
	body) {
		if (!error && response.statusCode == 200) {
			const data = JSON.parse(body);
			console.log(body);
			res.render('yesno', { title: 'Yes or No', Answer: data.answer, YesNoImage: data.image });
		}
	});
})
module.exports = router;