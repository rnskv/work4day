import Action from '../../core/Action';
import OfferModel from '../../models/OfferModel';
import VError from '../../core/VError';
import configs from '../../configs';

class CreateAction extends Action {
    static async run (req, res, next) {
        const offer = new OfferModel({
            groupId: req.body.groupId,
            text: req.body.text,
            categoryId: req.body.categoryId,
            postId: req.body.postId,
            date: req.body.date
        });

        try {
          await offer.save();
        } catch (err) {
          if (err) {
            throw new VError(configs.errors.DB)
          }
        }

        res.sendStatus(200)
    }
}

export default CreateAction;
