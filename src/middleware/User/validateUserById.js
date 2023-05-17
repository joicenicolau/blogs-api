const Service = require('../../services/userService');

const validateUserById = async (req, res, next) => {
  const { id } = req.params;

  const userId = await Service.getByUserId(id);

  if (!userId) {
    return res
      .status(404)
      .json({ message: 'User does not exist' });
  }
  
  return next();
};

module.exports = validateUserById;