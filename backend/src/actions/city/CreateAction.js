import Action from '../../core/Action';
import CityModel from '../../models/CityModel';
import VError from '../../core/VError';
import configs from '../../configs';

class CreateAction extends Action {
    static async run (req, res, next) {
        console.log('create city', req.body);
        const { name = '' } = req.body;

        const city = new CityModel({
            name
        });

        await city.save();

        res.json({status: 'ok'})
    }
}

export default CreateAction;