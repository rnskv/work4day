import Action from '../../core/Action';
import UserModel from '../../models/UserModel';
import VError from '../../core/VError';
import configs from '../../configs';

class VkAuthAction extends Action {
    static async run (req, res, next) {
        res.send({text: `vk auth action with code: ${req.query.code}`})
    }
}

export default VkAuthAction;