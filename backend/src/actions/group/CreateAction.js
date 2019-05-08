import Action from '../../core/Action';
import GroupModel from '../../models/GroupModel';
import VError from '../../core/VError';
import configs from '../../configs';

class CreateAction extends Action {
    static async run (req, res, next) {
        console.log(req.body.date);
        const group = new GroupModel({
            id: req.body.groupId || req.params.id
        });
        await group.save();

        res.json({status: 'ok'})
    }
}

export default CreateAction;