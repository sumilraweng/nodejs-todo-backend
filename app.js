const express = require("express");
const dotenv = require("dotenv");
dotenv.config({ path: "./config.env" });

const taskRouter = require("./routes/todoRoutes");
const PORT = process.env.PORT || 3000;

const app = express();
app.use(express.json());

//Router
app.use("/todolist", taskRouter);

app.listen(PORT, () => {
  console.log(`Listening at ${PORT}`);
});
