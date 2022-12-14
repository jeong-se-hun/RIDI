const express = require('express');

const app = express();
const path = require('path');

const cookieParser = require('cookie-parser');
const jwt = require('jsonwebtoken');
const users = require('./usersData/users');

require('dotenv').config();

const { PORT } = process.env;

app.use(express.static(path.join(__dirname, '/public')));
app.use(express.json());
app.use(cookieParser());

const auth = (req, res) => {
  const { accessToken } = req.cookies;
  try {
    jwt.verify(accessToken, process.env.JWT_SECRET_KEY);
    console.log(`π μ¬μ©μ μΈμ¦ μ±κ³΅`);
    res.send(true);
  } catch (e) {
    console.error('π± μ¬μ©μ μΈμ¦ μ€ν¨..', e);
    res.send(false);
  }
};

app.get('/auth', auth);

app.get('/mypage', (req, res) => {
  try {
    jwt.verify(req.cookies.accessToken, process.env.JWT_SECRET_KEY);
    res.sendFile(path.join(__dirname, 'public/index.html'));
  } catch (e) {
    res.redirect('/');
  }
});

app.post('/login', async (req, res) => {
  console.log(req.body);
  const { userid, password } = req.body;

  if (!userid || !password)
    return res.status(401).send({ error: 'μ¬μ©μ μμ΄λ λλ ν¨μ€μλκ° μ λ¬λμ§ μμμ΅λλ€.' });

  const user = await users.findUser(userid, password);
  console.log('test', user);

  // 401 Unauthorized
  if (!user) return res.status(401).send({ error: 'λ±λ‘λμ§ μμ μ¬μ©μμλλ€.' });

  const { userId, birth, email } = user;

  // ν ν° μμ±
  const accessToken = jwt.sign({ userId, birth, email }, process.env.JWT_SECRET_KEY, {
    expiresIn: '1h',
  });

  res.cookie('accessToken', accessToken, {
    maxAge: 1000 * 60 * 60 * 1 * 1, //
    httpOnly: true,
  });

  // λ‘κ·ΈμΈ μ±κ³΅
  res.send({ userid, birth, accessToken });
});

app.post('/signup', async (req, res) => {
  const { userId, password, birth, userEmail } = req.body;
  const availableId = await users.createUser(userId, password, birth, userEmail);
  res.send({ availableId });
});

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public/index.html'));
});

app.listen(PORT);

module.exports = app;
