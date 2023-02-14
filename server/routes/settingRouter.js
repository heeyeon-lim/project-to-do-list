const express = require('express')
const router = express.Router()
const { listSetting, updateSetting } = require('../controller/settingController');

router.get('/', listSetting)

router.put('/', updateSetting)

module.exports = router; 