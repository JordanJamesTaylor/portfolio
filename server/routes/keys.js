const express = require('express');
const router = express.Router();
const {
    getKeys,
    getKey,
    createKey,
    putKey,
    deleteKeys,
    deleteKey
} = require('../controllers/keyController');

router.route('/')
    .get(getKeys)
    .post(createKey)
    .delete(deleteKeys);

router.route('/:keyId')
    .get(getKey)
    .put(putKey)
    .delete(deleteKey);

module.exports = router;

