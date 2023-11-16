const express = require("express");
const router = express.Router();

// const User = require("../models/user.model");

//회원가입
const { Op } = require("sequelize");
const { User } = require("../models/user.model");

router.post("/users", async (req, res) => {
  const { email, nickname, password, confirmPassword } = req.body;

  if (password !== confirmPassword) {
    res.status(400).send({ errorMessage: "패스워드가 패스워드 확인란과 다릅니다." });
    return;
  }

  const existsUsers = await User.findAll({
    where: {
      [Op.or]: [{ email }, { nickname }]
    }
  });
  if (existsUsers.length) {
    res.status(400).send({ errorMessage: "이메일 또는 닉네임이 이미 사용중입니다." });
    return;
  }

  await User.create({ email, nickname, password });
  res.status(201).send({});
});

const authMiddleware = require("../middlewares/need-signin.middlware");

//내 정보 조회
router.get("/users/me", authMiddleware, async (req, res) => {
  const { email, nickname } = res.locals.user;

  res.status(200).json({ user: { email, nickname } });
});

module.exports = router;
