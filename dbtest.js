const assert = require('assert');
const { insert, find, updateOne, deleteOne } = require('./db');

describe('MongoDB Test', () => {
    it('#insert', async () => {
        const res = await insert({ test: 'jong' });
        assert(res);
    });

    it('#findAll', async () => {
        const res = await find();
        assert(res);
    });

    it('#findOne', async () => {
        const res = await find({ test: 'jong'});
        assert(res);
    });

    it('#updateOne', async () => {
        const res = await updateOne({ test: 'jong' }, { test: 'update' });
        assert(res);
    });

    it('#deleteOne', async () => {
        const res = await deleteOne({ test: 'update' });
        assert(res);
    });
});