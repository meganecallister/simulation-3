module.exports = {

    login: ( req, res ) => {
        console.log("trying to login!");
        const db = req.app.get('db');
        const { username, password } = req.body;

        db.find_user([username, password]).then(existingUser => {
            if(!existingUser[0]) {
                
            }
        }
        )
        const(match)
        if(same) {

        }


        db.find_user([ username, password ])
        if(req.user) {
            res.status(200).send(req.user);
        } else {
            res.status(401).send('Nope!');
        }
    },

    register: ( req, res ) => {
        console.log("trying to register!");
        const db = req.app.get('db');
        const { username, password } = req.body;

        db.create_user([ username, password ]).then( user => {
        res.status(200).send(user)
        .catch( (err) => console.log(err) )
        })
    }
};