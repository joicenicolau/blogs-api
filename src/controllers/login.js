const { createToken } = require('../auth/authFunction');
const Service = require('../services/login');

module.exports = async (req, res) => {
    const { email, password } = req.body;

    if (!email || !password) {
      return res
        .status(400)
        .json({ message: 'Some required fields are missing' });
    }

    const result = await Service.getEmail(email);

    if (!result) {
      return res
        .status(400)
        .json({ message: 'Invalid fields' });
    }

    const token = createToken(email);

    res.status(200).json({ token });
};