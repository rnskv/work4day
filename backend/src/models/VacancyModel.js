import { Schema } from 'mongoose';
import Model from '../core/Model';

const vacancySchema = new Schema({
    groupId: {
        type: Number,
        default: 0,
    },
    postId: {
        type: Number,
        default: 0,
    },
    text: {
        type: String,
        default: 'Text template',
    },
    whoNeed: {
        type: String,
        default: '',
    },
    whyNeed: {
        type: String,
        default: '',
    },
    categoryId: {
        type: Number,
        default: 0,
    },
    salary: {
        type: Number,
        default: 0,
    },
    date: {
        type: Date,
        default: new Date()
    },
    isModerated: {
        type: Boolean,
        default: false
    },
    createAt: {
        type: Date,
        default: new Date()
    },
    updateAt: {
        type: Date,
        default: new Date()
    }
});

const UserModel = new Model('vacancy', vacancySchema);

export default UserModel;