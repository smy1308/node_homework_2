require('dotenv').config();
const mongoose = require('mongoose');

const dbkey = process.env.key;
const dbpassword = process.env.password;

const connect = () => {
  mongoose
    .connect(
      `mongodb+srv://${dbkey}:${dbpassword}@cluster0.fgwbkpo.mongodb.net/?retryWrites=true&w=majority`,
      {
        dbName: 'node_lv1', // node_lv1 데이터베이스명을 사용합니다.
      },
    )
    .then(() => console.log('MongoDB 연결에 성공하였습니다.'))
    .catch((err) => console.log(`MongoDB 연결에 실패하였습니다. ${err}`));
};

mongoose.connection.on('error', (err) => {
  console.error('MongoDB 연결 에러', err);
});

module.exports = connect;