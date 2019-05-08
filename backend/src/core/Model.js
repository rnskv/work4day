import mongoose from 'mongoose';

class Model extends mongoose.model {
    constructor(...params) {
        super(...params);
    }
}

export default Model;