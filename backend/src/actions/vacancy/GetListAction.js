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
        const cityId = Number(query.cityId) || null;

        const salary = Number(query.salary) || 0;

        let filters = {
            isModerated,
            salary: { $gte: salary }
        };
        categories.length && Object.assign(filters, { categoryId: { $in: categories} });

        let groupFilter = {};
        cityId !== null && Object.assign(groupFilter, { 'group.cityId': cityId });

        const vacancies = await VacancyModel
            .aggregate([
                { $match : filters },
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
                },
                { $match :  groupFilter  },
            ])
            .skip(skip)
            .limit(limit)
            .exec()
        console.log(2);
        console.log('isModerated', isModerated);

        const formattedVacancies = [];
        console.log('res.json 1')

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
                    screenName: vacancy.group.screenName,
                    cityId: vacancy.group.cityId
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