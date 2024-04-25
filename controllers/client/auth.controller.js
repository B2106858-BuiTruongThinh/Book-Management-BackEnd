const bcrypt = require('bcrypt');
const Reader = require('../../models/reader.model');

const login = async (req, res, next) => {
  try {
    const Email = req.body.email;
    const Password = req.body.password;

    const user = await Reader.findOne({ email: Email });

    if (!user) {
      res.json('wrong info');
      return;
    }

    if (!Password) {
      res.json('wrong info');
      return;
    }

    if (Password != user.password ) {
      res.json('wrong info');
      return;
    }

    res.cookie("tokenUser", user.token);
    res.json('success');

  } catch (error) {
    console.log('error:', error);
    return next(new ApiError(500, error));
  }

};


const logout = async (req, res) => {
  res.clearCookie("tokenUser");
  res.send({
    success: true
  })
}

module.exports = {
  login,
  logout
}