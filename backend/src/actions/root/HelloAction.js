import Action from '../../core/Action';

class HelloAction extends Action {
    static async run (req, res, next) {
        res.json({
            status: 200,
            body: 'Hello World ;)'
        })
    }
}

export default HelloAction;
