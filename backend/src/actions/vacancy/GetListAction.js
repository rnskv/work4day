import Action from '../../core/Action';
import VacancyModel from '../../models/VacancyModel';
import VError from '../../core/VError';
import configs from '../../configs';

class GetListAction extends Action {
    static async run (req, res, next) {
        const skip = +req.query.skip || 0;
        const limit = +req.query.limit || 100;
        console.log(limit);

        const vacancies = await VacancyModel
            .aggregate([
                {
                    $lookup: {
                        from: 'groups',
                        localField: 'groupId',
                        foreignField: 'id',
                        as: 'group'
                    }
                },
                {
                    $unwind: "$group"
                },
                {
                    $sort: {
                        date: -1
                    }
                }
            ])
            .skip(skip)
            .limit(limit)
            .exec();

        const response = {
            meta: {
                groups: VacancyModel.find({ })
            },
            body: vacancies
        };
        res.json(vacancies)
    }
}

export default GetListAction;