const client = require('./dbconfig');

exports.insert = async (data = {}) => {
    const db = (await client).db('test');
    const collection = db.collection('mongo');
    const result = await collection.insertOne(data);
    return result;
}

exports.find = async (data = {}) => {
    const db = (await client).db('test');
    const collection = db.collection('mongo');
    const result = await collection.find(data).toArray();
    return result;
}

exports.updateOne = async (condition = {}, data = {}) => {
    const db = (await client).db('test');
    const collection = db.collection('mongo');
    const result = await collection.updateOne(condition, { '$set': data });
    return result;
}

exports.deleteOne = async (data = {}) => {
    const db = (await client).db('test');
    const collection = db.collection('mongo');
    const result = await collection.deleteOne(data);
    return result;
}