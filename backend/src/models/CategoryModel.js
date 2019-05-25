import { Schema } from 'mongoose';

import Model from '../core/Model';
import plugins from './plugins';

const categorySchema = new Schema({
    id: {
        type: Number,
        default: -1
    },
    name: {
        type: String,
        unique: true
    },
});

categorySchema.plugin(plugins.AutoIncrement, {inc_field: 'id', id: 'category_model_id_counter'});

const CategoryModel = new Model('category', categorySchema);

export default CategoryModel;