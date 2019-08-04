import Action from '../../core/Action';
import OfferModel from '../../models/OfferModel';
import VError from '../../core/VError';

class DeleteAction extends Action {
    static async run (req, res, next) {
        const { set } = req.body;
        const { id } = req.params;

        console.log('delete action', id,  set);

        OfferModel.deleteOne({ _id: id })
            .then(() => {
              res.status(200);
              res.json({
                body: {
                  status: 'ok'
                },
                meta: {}
              })
            })
            .catch(error => {
              res.status(500);
              res.json({
                body: {
                  error
                },
                meta: {}
              })
            });
    }
}

export default DeleteAction;
