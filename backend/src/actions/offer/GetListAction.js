import Action from '../../core/Action';
import OfferModel from '../../models/OfferModel';
import { removeUndefinedFromObject, toNum } from '../../helpers/global';
import CategoryModel from '../../models/CategoryModel';

import VError from '../../core/VError';
import configs from '../../configs';

class GetListAction extends Action {
    static async run (req, res, next) {
      const { limit = 10, skip = 0, categoryId, cityId, groupId } = req.query;

      const offers = await OfferModel.aggregate([
        {
          $limit: limit
        },
        {
          $skip: skip
        },
        {
          $match: removeUndefinedFromObject({
            categoryId: toNum(categoryId),
            groupId: toNum(groupId),
            cityId: toNum(cityId)
          })
        },
        {
          $lookup: {
              from: 'categories',
              localField: 'categoryId',
              foreignField: 'id',
              as: 'category',
            }
        },
        {
          $lookup: {
            from: 'groups',
            localField: 'groupId',
            foreignField: 'id',
            as: 'group',
          }
        },
        {
          $project: {
            '_id': 0,
            'isModerated': 1,
            'text': 1,
            'postId': 1,
            'date': 1,
            'category.id': 1,
            'category.name': 1,
            'group.photo100': 1,
            'group.name': 1,
            'group.screenName': 1,
          }
        },
        {
          $unwind: '$category'
        },
        {
          $unwind: '$group'
        }
      ]).exec();

      res.json({
        body: {
          offers
        },
        meta: {
          count: await OfferModel.count()
        }
      })
    }
}

export default GetListAction;
