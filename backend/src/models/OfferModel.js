import { Schema } from 'mongoose';
import Model from '../core/Model';

const vacancySchema = new Schema({
  groupId: {
    type: Number,
    required: true,
  },
  text: {
    type: String,
    required: true,
  },
  categoryId: {
    type: Number,
    default: 0,
  },
  title: {
    type: String,
    default: ''
  },
  postId: {
    type: Number,
    required: true
  },
  isModerated: {
    type: Boolean,
    default: false
  },
  date: {
    type: Date,
    default: new Date()
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

const Offer = new Model('offer', vacancySchema);

export default Offer;
