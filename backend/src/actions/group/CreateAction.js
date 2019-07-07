import Action from '../../core/Action';
import GroupModel from '../../models/GroupModel';
import VError from '../../core/VError';
import configs from '../../configs';

class CreateAction extends Action {
    static async run (req, res, next) {
        const group = new GroupModel({
            id: req.body.groupId,
            cityId: req.body.cityId
        });
        await group.save();

        res.json({status: 'ok'})
    }
}

export default CreateAction;
