import Action from '../../core/Action';
import CategoryModel from '../../models/CategoryModel';
import VError from '../../core/VError';
import configs from '../../configs';

class GetListAction extends Action {
    static async run (req, res, next) {
        const categories = await CategoryModel
            .aggregate([
                { $match: {} },
                { $project:{ _id: 0, name: 1, id: 1 } }
                ])
            .exec();


        res.json({
            body: categories,
            meta: { ok: true }
        })
    }
}

export default GetListAction;