const jwt = require('jsonwebtoken');

// regras de negócio
const jwtConfig = {
  // expiresIn: '15m',
  algorithm: 'HS256',
};
  
const secret = process.env.JWT_SECRET || 'seusegredodetoken';

// gera o token
const createToken = (data) => jwt.sign({ data }, secret, jwtConfig);

const verifyToken = (token) => jwt.verify(token, secret);

module.exports = { createToken, verifyToken };