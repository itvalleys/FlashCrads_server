const jwt = require('jsonwebtoken');
const admin = require('../models/Admin.model')
module.exports = {

    authentication(req, res, next) {
        console.log(req.body)

        admin.findOne({ email: req.body.email }, (err, user) => {
            console.log(user)
            if (!user) {
                return res.status(200).json({ message: "Invalid Credentials..you got no access" })
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
    },

    async getadmindata(req, res) {
        admin.find({ _id: req._id })
            .then((result) => {
                res.status(200).json({ message: "got admin", result });
            })
            .catch((err) => { res.status(400).json({ message: "something went wrong", err }); })
    },

    async updateAdmin(req, res) {
        admin.update({ _id: req._id },
            {
                $set: {
                    fullname: req.body.fullname,
                    email: req.body.email
                }
            })
            .then((result) => { res.status(200).json({ message: "updated admin", result }); })
            .catch((err) => { res.status(400).json({ message: "something went wrong", err }); })
    }


}