import Action from '../../core/Action';
import GroupModel from '../../models/GroupModel';
import VError from '../../core/VError';
import configs from '../../configs';

class GetListAction extends Action {
    static async run (req, res, next) {
        const groups = await GroupModel.find({}).select('id lastPostId photo100 name').exec();
        res.json(groups)
    }
}

export default GetListAction;