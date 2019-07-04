import Action from '../../core/Action';
import GroupModel from '../../models/GroupModel';
import VError from '../../core/VError';

class UpdateAction extends Action {
    static async run (req, res, next) {
        const { set } = req.body;
        const { id } = req.params;

        console.log('update action', id, set);

        GroupModel.updateOne({ id }, { $set: set })
            .then(() => { res.send({text: 'update action'}) })
            .catch(e => { res.send(e)});
    }
}

export default UpdateAction;
