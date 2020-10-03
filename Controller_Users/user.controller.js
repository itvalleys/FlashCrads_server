const jwt = require('jsonwebtoken');
const passport = require('passport');

const User = require("../models/user.model");


module.exports.register = (req, res, next) => {
    var user = new User();
    user.fullName = req.body.fullName;
    user.email = req.body.email;
    user.password = req.body.password;
    user.save((err, doc) => {
        if (!err) res.status(200).send({ message: "user created successfully", doc });
        else {
            if (err.code == 11000)
                res.status(422).send(['Duplicate email adrress found.']);
            else return next(err);
        }
    });
};

module.exports.authenticate = (req, res, next) => {
    // call for passport authentication
    passport.authenticate('local', (err, user, info) => {
        // error from passport middleware

        if (err) return res.status(400).json(err);
        // registered user

        else if (user) return res.status(200).json({ token: user.generateJwt() });
        // unknown user or wrong password
        else return res.status(404).json(info);
    })(req, res);
};


module.exports.google = (req, res, next) => {
    User.findOne({ email: req.body.email }, (err, user) => {
        if (!user) {
            var newgoogleUser = req.body;
            console.log(newgoogleUser)
            User.create(req.body)
                .then(result => {
                    var payload = {
                        _id: req.body.googleId,
                        fullName: req.body.username
                    }
                    var newToken = jwt.sign(payload, process.env.JWT_SECRET,
                        {
                            expiresIn: process.env.JWT_EXP,
                        })
                    res.status(200).json({ message: "token provided after userCreated", newToken })
                })
                .catch(err => console.log("something problem in creating user"))
        }
        else {
            console.log("user exists need to login");
            var payload = {
                _id: req.body.googleId,
                fullName: req.body.username
            }
            var newToken = jwt.sign(payload, process.env.JWT_SECRET,
                {
                    expiresIn: process.env.JWT_EXP,
                });
            return res.status(200).json({ message: "token provided after user verified", newToken });
        }
    });
}