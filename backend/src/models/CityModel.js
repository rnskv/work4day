import { Schema } from 'mongoose';

import Model from '../core/Model';
import plugins from './plugins';

const citySchema = new Schema({
    id: {
        type: Number,
        default: -1
    },
    name: {
        type: String,
        unique: true
    },
});
citySchema.plugin(plugins.AutoIncrement, {inc_field: 'id'});

const CityModel = new Model('city', citySchema);

export default CityModel;