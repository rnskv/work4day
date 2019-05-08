import CC from './CommonClass';
import mongoose from 'mongoose';
import configs from '../configs';

class Dao extends CC {
    constructor(params) {
        super(params);
        this.params = params;
    }

    async connect() {
        try {
            await mongoose.connect(configs.db.connectUrl, { useNewUrlParser: true, useCreateIndex: true })
        } catch (err) {
            console.log('Mongoose database can`t connect');
        }
    }

    successCb(params) {
        console.log('Mongoose ready.');
    }

    errorCb(error) {
        console.log('Mongoose is not ready.');
    }
}

export default Dao;