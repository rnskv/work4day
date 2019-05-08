import Action from '../../core/Action';
import UserModel from '../../models/UserModel';
import VError from '../../core/VError';
import configs from '../../configs';

class CreateAction extends Action {
    static async run (req, res, next) {
        const user = new UserModel({ name: 'Roma' });
        await user.save();
        throw new VError(configs.errors.DB);
        res.send({text: 'user save'})
    }
}

export default CreateAction;