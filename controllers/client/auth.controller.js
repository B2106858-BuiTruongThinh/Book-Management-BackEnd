const bcrypt = require('bcrypt');
const Reader = require('../../models/reader.model');

const loginPost = async (req, res, next) => {
  try {
    const enteredEmail = req.body.email;
    const enteredPassword = req.body.password;

    const user = await Reader.findOne({ email: enteredEmail });

    if (!user) {
      res.json('wrong info');
      return;
    }

    if (!enteredPassword) {
      res.json('wrong info');
      return;
    }

    if (enteredPassword != user.password ) {
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
  loginPost,
  logout
}