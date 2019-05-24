import { Schema } from 'mongoose';
import Model from '../core/Model';

const citySchema = new Schema({
    name: {
        type: String,
        unique: true
    },
});

const CityModel = new Model('city', citySchema);

export default CityModel;