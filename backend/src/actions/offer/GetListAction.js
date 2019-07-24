import Action from '../../core/Action';
import OfferModel from '../../models/OfferModel';
import { removeEmptyValuesFromObject, toNum, toBool } from '../../helpers/global';
import CategoryModel from '../../models/CategoryModel';

import VError from '../../core/VError';
import configs from '../../configs';

class GetListAction extends Action {
    static async run (req, res, next) {
      const { limit = 100, skip = 0, categoryId, cityId, groupId, isModerated = false } = req.query;
      console.log('get', isModerated)
      const offers = await OfferModel.aggregate([
        { $sort : { isModerated : 1, date: -1 } },
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
          $lookup: {
            from: 'cities',
            localField: 'group.cityId',
            foreignField: 'id',
            as: 'location',
          }
        },
        {
          $match: removeEmptyValuesFromObject({
            'isModerated': toBool(isModerated),
            'categoryId': toNum(categoryId),
            'group.cityId': toNum(cityId)
          })
        },
        {
          $project: {
            '_id': 1,
            'isModerated': 1,
            'text': 1,
            'title': 1,
            'postId': 1,
            'date': 1,
            'category.id': 1,
            'category.name': 1,
            'group.id': 1,
            'group.photo100': 1,
            'group.name': 1,
            'group.screenName': 1,
            'location.id': 1,
            'location.name': 1,
          }
        },
        {
          $facet: {
            body: [
              {
                $skip: toNum(skip)
              },
              {
                $limit: toNum(limit)
              },
              {
                $unwind: '$category'
              },
              {
                $unwind: '$group'
              },
              {
                $unwind: '$location'
              }
            ],
            meta: [
              {
                $group: {
                  _id: null,
                  count: { $sum: 1 }
                }
              }
            ]
          }
        },
      ]).exec();

      res.json({
        body: offers[0].body,
        meta: offers[0].meta[0]
      })
    }
}

export default GetListAction;
