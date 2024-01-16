const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const { connectDatabase } = require("./config/mongodb");

dotenv.config();
connectDatabase();
const app = express();
const PORT = Number(process.env.PORT) || 3000;

app
  .use(
    cors({
      origin: [
        "http://localhost:3000",
        "https://note-taking-backend-server.vercel.app",
        "https://note-taking-backend-server-bhawna-s-projects.vercel.app",
        "http://127.0.0.1:5500",
      ],
      credentials: true,
    })
  )
  .set("x-powered-by", false)
  .use(express.urlencoded({ extended: true }))
  .use(express.json());

// Routes
app.get("/", (req, res) => {
  res.status(200).json({
    message: "Server is running...",
  });
});

app.use("/api/auth", require("./src/routes/auth.js"));
app.use("/api/task", require("./src/routes/todo.js"));

const text = `
************************************************************

                  Listening on port: ${PORT}
                  http://localhost:${PORT}

************************************************************`;

app.listen(PORT, () => {
  console.log(text);
});
