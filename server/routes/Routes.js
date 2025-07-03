const express = require('express');
const mongoose = require('mongoose');
const User = require('../model/UserSchema.js')
const bcrypt = require('bcrypt');

const route = express.Router();

route.get('/getusers', async (req, res) => {
    try {
        const allUsers = await User.find({});
        res.status(200).json(allUsers);
    } catch (error) {
        
    }
});

route.get('/', (req, res) => {
    res.json({ message: "Welcome to the server" });
})

route.post('/register', async (req, res) => {
    console.log('body', req.body)
    const { name, email, role, salery, password } = req.body;
    if(('hike' in req.body == false )){
        req.body = {...req.body, hike: "4"}
    }
    console.log(req.body)
    // if (!name || !email || !phone || !work || !password || !cpassword) {
    //     return res.status(422).json({ error: "plz fill all the details" });
    // }

    try {
        const UserExist = await User.findOne({ email: email });

        if (UserExist) { return res.status(200).json({ error: "user already exist" }) };

        const newUser = new User(req.body);
        // hashing of password using middleware pre(mongoose) in UserSchema
        const userreg = await newUser.save();
        console.log('reg', userreg)
        res.status(200).json({ message: "user registered successfully" });

    } catch (error) {
        console.log(error);
    }

})

route.post('/signin', async (req, res) => {
    try {
        const { email, password } = req.body;

        // if (!email || !password) { return res.status(422).json({ error: "plz fill all the details" }) }
        const userLogin = await User.findOne({ email: email });
        // console.log(userLogin);

        if (userLogin) {

            const isMatch = await bcrypt.compare(password, userLogin.password);
            // console.log(isMatch);
            if (isMatch) {
                const token = await userLogin.generateAuthToken();
                console.log(token);

                res.cookie('jwtoken', token, {
                    expires: new Date(Date.now() + 25892000000),
                    httpOnly: true
                });
                res.status(200).json(userLogin);

            } else { res.status(200).json({ message: "Invalid Credentials" })}

        } else { res.status(200).json({ message: "Invalid Credentials" })};

    } catch (error) {
        console.log(error);
    }
})

module.exports = route;
