const { response } = require('express');
const userCollection = require('../model/userModel');

const getAllUser = (res) => {
    userCollection.find()
        .exec()
        .then(data => {
            console.log(data);
            res.status(200).json(data);
        })
        .catch(err => {
            console.log(err);
        });
}

const searchUser = (res, value) => {
    userCollection.find({ "username": value })
        .exec()
        .then(data => {
            console.log(data);
            res.status(200).json(data);
        })
        .catch(err => {
            console.log(err);
        });
}

const addUser = (res, userObject) => {

    userCollection.create(userObject, (err, result) => {
        if (err) {
            console.log(err);
        } else {
            res.status(200).json(
                {
                    status: 'Success',
                    info: 'New User Added'
                }
            );
        }
    });

}

const updateUser = (res, username, newUsername) => {

    userCollection.updateMany({ "username": username }, { "$set": { "username": newUsername } }, (err, result) => {
        if (err) {
            console.log(err);
        } else {
            res.status(200).json(
                {
                    status: 'Success',
                    info: 'Username Updated'
                }
            );
        }
    });

}

module.exports.getAllUser = getAllUser;
module.exports.searchUser = searchUser;
module.exports.addUser = addUser;
module.exports.updateUser = updateUser;