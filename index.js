const express = require("express");
const app = express();
const port = 5000;

const config = require("./config/key");

const bodyParser = require("body-parser");
const { User } = require("./models/User");

// bodyParser가 client에서 오는 정보를 서버에서 분석해서 가져올 수 있게 함
// /application/x-www-form-rulencoded
app.use(bodyParser.urlencoded({ extended: true }));
// /application/json
app.use(bodyParser.json());

const mongoose = require("mongoose");
mongoose
  .connect(config.mongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
  })
  .then(() => console.log("MongoDB connected!"))
  .catch((err) => console.log(err));

app.get("/", (req, res) => res.send("접속을 성공했습니다."));
app.post("/register", (req, res) => {
  // 회원가입 할 때 필요한 정보들을 client에서 가져오면 데이터 베이스에 넣어준다.
  const user = new User(req.body);

  // moongoDB Method
  user.save((err, userInfo) => {
    if (err) return res.json({ success: false, err });
    return res.status(200).json({
      success: true,
    });
  });
});
app.listen(port, () =>
  console.log(`Example app listening at http://localhost:${port}`)
);
