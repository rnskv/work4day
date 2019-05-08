import Action from '../../core/Action';
import UserModel from '../../models/UserModel';
import VError from '../../core/VError';
import configs from '../../configs';

class DeleteAction extends Action {
    static async run (req, res, next) {
        res.send({text: 'delete action'})
    }
}

export default DeleteAction;