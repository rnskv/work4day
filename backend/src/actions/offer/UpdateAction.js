import Action from '../../core/Action';
import OfferModel from '../../models/OfferModel';
import VError from '../../core/VError';
import { toBool } from '../../helpers/global';

class UpdateAction extends Action {
    static async run (req, res, next) {
        const { set } = req.body;
        const { id } = req.params;
        const { isModerated, ...fields } = set;

        await OfferModel.updateOne(
          { _id: id },
          { $set: set })
          .then((data) => {
            res.status(200);
            res.json({
              body: {
                updatedFields: set
              },
              meta: {}
            })
          })
          .catch((err) => {
            res.status(500);
            res.json({
              body: {
                error: err
              },
              meta: {}
            })
          });
    }
}

export default UpdateAction;
