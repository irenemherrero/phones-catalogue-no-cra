const express = require('express')
const router = express.Router()
const phones = require('./phones.json')

router.get('/', async (req, res, next) => res.status(200).json(phones))

module.exports = router
