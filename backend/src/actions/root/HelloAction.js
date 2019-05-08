import Action from '../../core/Action';

class HelloAction extends Action {
    static async run (req, res, next) {
        console.log('run at Hello action');
        res.json({
            status: 200,
            body: 'Hello World ;)'
        })
    }
}

export default HelloAction;