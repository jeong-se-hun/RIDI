const express = require('express');

const app = express();
const path = require('path');

const cookieParser = require('cookie-parser');
const jwt = require('jsonwebtoken');
// const users = require('./fake-data/users');

let users = [
  { userId: 'kids', password: '123456', birth: '2010', email: 'kids@test.com' },
  { userId: 'adult', password: '123456', birth: '1999', email: 'adult@test.com' },
];

const findUser = (userid, password) =>
  users.find(user => {
    console.log('findUser', user, userid, password);
    return user.userId === userid && user.password === password;
  });

const createUser = (userId, password, birth, email) => {
  users = [...users, { userId, password, birth, email }];
  console.log(users, '여긴 유저데이터!');
  console.log(users, '여긴 유저데이터!');
  console.log(users, '여긴 유저데이터!');
  console.log(users, '여긴 유저데이터!');
};

const getUsers = () => users;

//

require('dotenv').config();

const { PORT } = process.env;

app.use(express.static(path.join(__dirname, '/public')));
app.use(express.json());
app.use(cookieParser());

const auth = (req, res) => {
  const { accessToken } = req.cookies;
  try {
    jwt.verify(accessToken, process.env.JWT_SECRET_KEY);
    console.log(`😀 사용자 인증 성공`);
    res.send(true);
  } catch (e) {
    console.error('😱 사용자 인증 실패..', e);
    res.send(false);
  }
};

app.get('/auth', auth);

app.get('/mypage', (req, res) => {
  try {
    jwt.verify(req.cookies.accessToken, process.env.JWT_SECRET_KEY);
    res.sendFile(path.join(__dirname, 'dist/index.html'));
  } catch (e) {
    res.redirect('/');
  }
});

app.post('/login', (req, res) => {
  console.log(req.body);
  const { userid, password } = req.body;

  if (!userid || !password)
    return res.status(401).send({ error: '사용자 아이디 또는 패스워드가 전달되지 않았습니다.' });

  const user = findUser(userid, password);
  console.log('test', user);

  // 401 Unauthorized
  if (!user) return res.status(401).send({ error: '등록되지 않은 사용자입니다.' });

  const { userId, birth, email } = user;

  console.log('사용자 정보:', user);

  // 토큰 생성
  const accessToken = jwt.sign({ userId, birth, email }, process.env.JWT_SECRET_KEY, {
    expiresIn: '1d',
  });

  res.cookie('accessToken', accessToken, {
    maxAge: 1000 * 60 * 60 * 24 * 1, // 1d
    httpOnly: true,
  });

  // 로그인 성공
  res.send({ userid, birth, accessToken });
});

app.post('/signup', (req, res) => {
  console.log(req.body);
  const { userId, password, birth, userEmail } = req.body;
  createUser(userId, password, birth, userEmail);
  const userData = getUsers();
  res.send(userData);
});

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public/index.html'));
});

app.listen(PORT);

module.exports = app;
