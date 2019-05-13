import Action from '../../core/Action';
import VacancyModel from '../../models/VacancyModel';
import VError from '../../core/VError';
import configs from '../../configs';

class GetListAction extends Action {
    static async run (req, res, next) {
        const query = req.query;

        const skip = Number(req.query.skip) || 0;
        const limit = Number(req.query.limit) || 100;
        const isModerated = query.isModerated === undefined ? true : Boolean(Number(query.isModerated));

        const categories = query.categories && query.categories.split(',').map(e => +e) || [];
        const salary = Number(query.salary) || 0;
        console.log(categories);

        let filters = {
            isModerated,
            salary: { $gte: salary }
        };

        categories.length && Object.assign(filters, { categoryId: { $in: categories} });

        const vacancies = await VacancyModel
            .aggregate([
                { $match :  filters  },
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

        console.log('isModerated', isModerated);

        const formattedVacancies = [];

        vacancies.forEach(vacancy => {
            const date = new Date(vacancy.date.toString());
            formattedVacancies.push({
                id: vacancy._id,
                whoNeed: vacancy.whoNeed,
                whyNeed: vacancy.whyNeed,
                groupId: vacancy.groupId,
                postId: vacancy.postId,
                text: vacancy.text,
                categoryId: vacancy.categoryId,
                date: `${date.getHours()}:${date.getMinutes()}, ${date.getDay()}/${date.getMonth()}/${date.getFullYear()}`,
                title: vacancy.title,
                description: vacancy.description,
                salary: vacancy.salary,
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