const express = require("express");
const app = express();
const router = require("./router/main")(app);
//router에 main을 가져아서 app에 전달해준다는 의미

app.set("views", __dirname + "/views");
app.set("view engine", "ejs");
app.engine("html", require("ejs").renderFile);

const server = app.listen(3000, () => {
    console.log("Express server has started on port 3000");
});
app.use(express.static("public"));
