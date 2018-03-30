module.exports = {
    register: function( req, res ) {
        console.log("trying to register!");
        const db = req.app.get('db')
        const { username, password } = req.body;

        db.register([ username, password ])
        .then( () => res.status(200).send() )
        .catch( (err) => console.log(err) )
    }
}