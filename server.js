const express = require("express");
const login = require("./router/login");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
//bodyParser 설정

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept"
    );
    next();
});
//access controls allow origin은 cross 도메인 요청을 처리하기 위해 필수적이다.

const router = express.Router();

router.get("/", (req, res) => {
    res.json({
        message: "Welcome",
    });
});

router.post("/register", login.register);
router.post("/login", login.login);
app.use("/api", router);
app.listen(3000);
