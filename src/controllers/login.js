const { createToken } = require('../auth/authFunction');
const Service = require('../services/userService');

module.exports = async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res
      .status(400)
      .json({ message: 'Some required fields are missing' });
  }

  const result = await Service.getEmail(email);
  // console.log(result);

  if (!result) {
    return res
      .status(400)
      .json({ message: 'Invalid fields' });
  }
  
  // quando fazia requisição da userId na questão 12, o id vinha null. Não estava passando o id para o login. Mudei aqui. 
  const { dataValues: { password: _password, ...loginWithoutPassword } } = result;

  const token = createToken(loginWithoutPassword);

  return res.status(200).json({ token });
};