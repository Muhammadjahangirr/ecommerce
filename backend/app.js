const express = require("express");
const errorMiddleware = require("./middleware/error");
const cookieParser = require("cookie-parser");

const app = express();
app.use(express.json());
app.use(cookieParser());

//==============================================//
//=================ROUTES  ====================//
//============================================//
app.use("/api/product", require("./routes/productRoutes"));
app.use("/api/user", require("./routes/userRoutes"));
app.use("/api/v1", require("./routes/orderRoute"));

//==============================================//
//=============Middleware For Errors===========//
//============================================//

app.use(errorMiddleware);

module.exports = app;
