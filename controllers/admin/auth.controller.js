const Account = require('../../models/employee.model');
const ApiError = require('../../helpers/api-error');

const login = async (req, res, next) => {
  try {
    const Email = req.body.email;
    const Password = req.body.password;

    const employee = await Account.findOne({ email: Email });

    if (!user) {
      res.json('wrong info');
      return;
    }

    if (!Password) {
      res.json('wrong info');
      return;
    }

    if (Password != employee.password ) {
      res.json('wrong info');
      return;
    }

    res.cookie("token", employee.token);
    res.json('success');

  } catch (error) {
    return next(new ApiError(500, error));
  }
};

const logout = async (req, res) => {
  res.clearCookie("token");
  res.send({
    success: true
  })
}

module.exports = {
  login,
  logout,
}