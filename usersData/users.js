const axios = require('axios');

// let users = [
//   { userId: 'kids', password: '123456', birth: '2010', email: 'kids@test.com' },
//   { userId: 'adult', password: '123456', birth: '1999', email: 'adult@test.com' },
// ];

// const findUserByUserid = userid => users.find(user => user.userId === userid);

// const findUser = (userid, password) => users.find(user => user.userId === userid && user.password === password);

// const createUser = (userId, password, birth, email) => {
//   users = [...users, { userId, password, birth, email }];
//   console.log(users, '여긴 유저데이터!');
// };

// const getUsers = () => users;

const findUser = async (userid, password) => {
  const response = await axios('https://react-http-258ae-default-rtdb.firebaseio.com/ridi.json');
  const responseData = await response.data;

  for (const key in responseData) {
    if (responseData[key].userId === userid && responseData[key].password.toString() === password) {
      return responseData[key];
    }
  }
};

const createUser = async (userId, password, birth, email) => {
  await axios({
    method: 'post',
    url: 'https://react-http-258ae-default-rtdb.firebaseio.com/ridi.json',
    data: {
      userId,
      password,
      birth,
      email,
    },
  });
};

module.exports = { createUser, findUser };
