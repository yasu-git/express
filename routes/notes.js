var express = require('express');
var router = express.Router();

//レスポンスのデータ(ノートの全権)
const resposeObjectDataAll = {
	/**object配列
	*id
	*title
	*subTitle
	*bodyText
	**/
	textObject1: {
		id: 1,
		title: 'ノート１のタイトルです。',
		subTitle: 'ノート１のサブタイトルです。',
		bodyText: 'ノート１の本文です。',
	},
	textObject2: {
		id: 2,
		title: 'ノート２のタイトルです。',
		subTitle: 'ノート２のサブタイトルです。',
		bodyText: 'ノート２の本文です。',
	},
};

/**
 * メモを全権取得するapi
 * @param {Object[]} data
 * @param {number} data.id - ID
 * @param {string} data.title - タイトル
 * @param {string} data.text - 内容
 */

router.get('/', function(req, res, next) {
	//全権取得して返す
	res.json(resposeObjectDataAll);
});

module.exports = router;