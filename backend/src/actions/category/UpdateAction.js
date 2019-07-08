import Action from '../../core/Action';
import VacancyModel from '../../models/VacancyModel';
import VError from '../../core/VError';

class UpdateAction extends Action {
    static async run (req, res, next) {
        const { set } = req.body;
        const { id } = req.params;
        //
        VacancyModel.updateOne({ _id: id }, { $set: set })
            .then(() => { res.send({text: 'update action'}) })
            .catch(e => { res.send(e)});

        // res.json({hello: 'world'})
    }
}

export default UpdateAction;
