const express = require('express');
const router = express.Router();

const { getAllUser, searchUser, addUser, updateUser } = require('../controllers/userController');

const userCollection = require('../model/userModel');

router.get('/', (req, res) => {
    getAllUser(res);
});

router.get('/specific/:username', (req, res) => {

    let userName = req.params.username;
    const user = searchUser(res, userName);

})

router.post('/addUser', (req, res) => {

    let user = req.body.user;
    console.log(user);
    addUser(res, user);
});

router.put('/updateUser', (req, res) => {

    let oldUsername = req.body.username;
    let newUsername = req.body.newUsername;
    updateUser(res, oldUsername, newUsername);

});

module.exports = router;