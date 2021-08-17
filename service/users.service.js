const mongoose = require('mongoose');
const User = mongoose.model('users');

exports.get_users = async(req, res) => {
    try {
        const response = await User.find()
        res.status(200).json({ response })
    } catch (err) {
        res.status(401).json({ message: err })
        console.log(err)
    }
}

exports.get_user = async(req, res) => {
    try {
        const { _id } = req.params.id;
        const response = await User.findOne(_id)
        res.status(200).json({ user: response })
    } catch(err) {
        res.status(401).json({ message: err });
        console.log(err);
    }
}

exports.create_user = async(req, res) => {
    try {
        const { firstName, lastName, storeBranch, occupation, dob } = req.body;
        if(!firstName || !lastName || !storeBranch || !occupation || !dob) {
            return res.status(422).json({ message: 'Include fields' })
        }
        const user = new User({
            firstName,
            lastName,
            storeBranch,
            occupation,
            dob
        })
        await user.save()
        return res.status(201).json({ message: 'Successfully saved new staff 👍!' })
    } catch (err) {
        return res.status(401).json({ error: err })
    }
}

exports.delete_user = async (req, res) => {
    try {
        const { _id } = req.params.id;
        await User.deleteOne(_id)
        return res.status(200).json({ message: 'Successfully deleted a staff 😀!' });
    } catch(err) {
        return res.status(401).json({ error: err })
    }
}

exports.update_user = async (req, res) => {
    try {
        const { firstName, lastName, storeBranch, occupation, dob } = req.body;
        await User.updateOne({ _id: req.params.id }, {
            firstName,
            lastName,
            storeBranch,
            occupation,
            dob
        }, (error) =>
        {
            if(error) {
                res.status(401).json({ error: error })
            } else {
                return res.status(200).json({
                    message: 'Successfully updated a staff 😀!'
                });
            }
        })
    } catch(err) {
        console.log(err);
        return res.status(401).json({ error: err });
    }
}
