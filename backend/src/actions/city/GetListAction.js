import Action from '../../core/Action';
import CityModel from '../../models/CityModel';
import VError from '../../core/VError';
import configs from '../../configs';

class GetListAction extends Action {
    static async run (req, res, next) {
        const cities = await CityModel
            .aggregate([
                { $match: {} },
                { $project:{ _id: 0, name: 1, id: 1 } }
                ])
            .exec();


        res.json({
            body: cities,
            meta: { ok: true }
        })
    }
}

export default GetListAction;