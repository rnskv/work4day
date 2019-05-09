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

        const formattedVacancies = [];

        vacancies.forEach(vacancy => {
            const date = new Date(vacancy.date.toString());
            formattedVacancies.push({
                groupId: vacancy.groupId,
                postId: vacancy.postId,
                text: vacancy.text,
                category: vacancy.categoryId,
                date: `${date.getHours()}:${date.getMinutes()}, ${date.getDay()}/${date.getMonth()}/${date.getFullYear()}`,
                group: {
                    id: vacancy.group.id,
                    name: vacancy.group.name,
                    photo100: vacancy.group.photo100,
                    screenName: vacancy.group.screenName
                },
            })
        });

        res.json({
            body: formattedVacancies,
            meta: { ok: true }
        })
    }
}

export default GetListAction;