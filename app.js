const express = require("express");
const app = express();
const port = 3000;

// const connect = require("./models/index");
// connect();
const { sequelize } = require("./models");
const cookieParser = require("cookie-parser");
const productsRouter = require("./routes/products.router.js");
const usersRouter = require("./routes/user.routes.js");
const authRouter = require("./routes/auth.router.js");

app.use(express.json());
app.use(cookieParser());

sequelize
  .sync({ force: false })
  .then(() => {
    console.log("데이터베이스 연결 성공");
  })
  .catch((err) => {
    console.error(err);
  });

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.use("/api", [productsRouter, usersRouter, authRouter]);

app.listen(port, () => {
  console.log(port, "포트로 서버가 열렸어요!");
});
