const Key = require('../models/Key');

const getKeys = async (req, res, next) => {
    try{
        const allKeys = await Key.find();

        res
        .status(200)
        .setHeader('Content-Type', 'application/json')
        .json(allKeys);
    } catch(err) {
        next(err);
    };
};

const getKey = async (req, res, next) => {
    try{
        const key = await Key.findById(req.params.keyId);

        res
        .status(200)
        .setHeader('Content-Type', 'application/json')
        .json(key);
    } catch(err) {
        next(err);
    };
};

const createKey = async (req, res, next) => {
    try{
        console.log('HERE -->', req.body);
        const newKey = await Key.create(req.body);

        res
        .status(201)
        .setHeader('Content-Type', 'application/json')
        .json(newKey);
    } catch(err) {
        console.log('womp womp');
        next(err);
    };
};


const putKey = async (req, res, next) => {
    try{
        const updatedKey = await Key.findByIdAndUpdate(req.params.keyId, req.body, { new: true });

        res
        .status(200)
        .setHeader('Content-Type', 'application/json')
        .json(updatedKey);
    } catch(err) {
        next(err);
    };
};

const deleteKeys = async (req, res, next) => {
    try{
        const deletedKeys = await Key.deleteMany();

        res
        .status(204)
        .setHeader('Content-Type', 'application/json')
        .json(deleteKeys);
    } catch(err) {
        next(err);
    };
};

const deleteKey = async (req, res, next) => {
    try{
        const deletedKey = await Key.findByIdAndDelete(req.params.keyId, req.body, { new: true });

        res
        .status(204)
        .setHeader('Content-Type', 'application/json')
        .json(deletedKey);
    } catch(err) {
        next(err);
    };
};

module.exports = {
    getKeys,
    getKey,
    createKey,
    putKey,
    deleteKeys,
    deleteKey
};