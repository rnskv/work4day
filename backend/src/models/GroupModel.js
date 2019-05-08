import { Schema } from 'mongoose';
import Model from '../core/Model';

const groupSchema = new Schema({
    id: {
        type: Number,
        unique: true
    },
    lastPostId: {
        type: Number,
        default: 0,
    },
    photo100: {
        type: String,
        default: 'https://pp.userapi.com/c844216/v844216026/fed7b/yLJ9EShcvRs.jpg?ava=1',
    },
    name: {
        type: String,
        default: 'Unknown',
    },
    screenName: {
        type: String,
        default: 'Unknown'
    }
});

const GroupModel = new Model('group', groupSchema);

export default GroupModel;