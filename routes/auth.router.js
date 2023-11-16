const jwt = require("jsonwebtoken");
const express = require("express");
const router = express.Router();

const User = require("../models/user.model");

// 로그인 API
router.post("/auth", async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({
    where: {
      email
    }
  });

  if (!user || password !== user.password) {
    res.status(400).send({ errorMessage: "이메일 또는 패스워드가 틀렸습니다." });
    return;
  }

  res.send({
    token: jwt.sign({ userId: user.userId }, "nbc-secret-key")
  });
});

module.exports = router;
