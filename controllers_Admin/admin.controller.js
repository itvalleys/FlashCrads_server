const jwt = require('jsonwebtoken');
const admin = require('../models/Admin.model')
module.exports = {

    authentication(req, res, next) {
        console.log(req.body)

        admin.findOne({ email: req.body.email }, (err, user) => {
            console.log(user)
            if (!user) {
                admin.create(req.body)
                    .then(result => {
                        var payload = {
                            _id: result._id,
                            email: req.body.email
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
                    _id: user._id,
                    email: req.body.email
                }
                var newToken = jwt.sign(payload, process.env.JWT_SECRET,
                    {
                        expiresIn: process.env.JWT_EXP,
                    });
                return res.status(200).json({ message: "token provided after user verified", newToken });
            }
        });
    }


}