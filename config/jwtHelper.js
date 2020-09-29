const jwt = require('jsonwebtoken');

module.exports.verifyJwtToken = (req, res, next) => {
  var token;
  if ('authorization' in req.headers)
    token = req.headers['authorization'].split(' ')[1];

  if (!token)
    return res.status(403).send({ auth: false, message: 'No token provided.' });
  else {
    console.log('from jwt');
    console.log(token);
    jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
      if (err)
        return res
          .status(500)
          .send({
            auth: false,
            message: 'Token authentication failed.',
            token: null,
          });
      else {
        req._id = decoded._id;
        req.fullName = decoded.fullName;
        next();
      }
    });
  }
};
