import Action from '../../core/Action';
import VacancyModel from '../../models/VacancyModel';
import VError from '../../core/VError';
import configs from '../../configs';

class CreateAction extends Action {
    static async run (req, res, next) {
        const vacancy = new VacancyModel({
            groupId: req.body.groupId,
            postId: req.body.postId,
            text: req.body.text,
            date: req.body.date * 1000
        });
        await vacancy.save();

        res.json({status: 'ok'})
    }
}

export default CreateAction;
