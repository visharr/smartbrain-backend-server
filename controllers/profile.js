const handleProfile = (req, res,db) => {
    const { id } = req.body;
    let found = false; 

    db.select('*').from('users').where({ id:id }).then(user => {
        if (user.length) {
            res.json(user[0]);
        } else {
            res.status(404).json('no such user');
        }
    }).catch(err => {
        res.status(404).json('error getting user');

    })
}

const handleProfileUpdate = (req, res, db) => {
    const {name, age, pet, id} = req.body;
    db('users').where({id}).update({name,age,pet})
    .then(resp => {
        if (resp) {
            res.json('success');
        } else {
            res.status(400).json('unable to update');
        }
    })
    .catch(err => res.status(400).json('some error'));
}



module.exports = {
    handleProfile,
    handleProfileUpdate
} 