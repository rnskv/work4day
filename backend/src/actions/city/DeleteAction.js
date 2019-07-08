import Action from '../../core/Action';
import VacancyModel from '../../models/VacancyModel';
import VError from '../../core/VError';

class DeleteAction extends Action {
    static async run (req, res, next) {
        const { set } = req.body;
        const { id } = req.params;


        VacancyModel.remove({ _id: id })
            .then(() => { res.json({text: 'remove action'}) })
            .catch(e => { res.json(e)});
    }
}

export default DeleteAction;
