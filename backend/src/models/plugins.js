import mongoose from 'mongoose';
import inc from 'mongoose-sequence';

export default {
    AutoIncrement: inc(mongoose)
}