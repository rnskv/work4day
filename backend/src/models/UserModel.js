import { Schema } from 'mongoose';
import Model from '../core/Model';

const userSchema = new Schema({
    name: {
        type: String,
    }
});

const UserModel = new Model('user', userSchema);

export default UserModel;