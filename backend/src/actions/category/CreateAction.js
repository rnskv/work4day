import Action from '../../core/Action';
import CategoryModel from '../../models/CategoryModel';
import VError from '../../core/VError';
import configs from '../../configs';

class CreateAction extends Action {
    static async run (req, res, next) {
        const { name = '' } = req.body;

        const category = new CategoryModel({
            name
        });

        await category.save();

        res.json({status: 'ok'})
    }
}

export default CreateAction;
