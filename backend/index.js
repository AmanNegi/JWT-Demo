require("dotenv").config();
const express = require("express");
const jwt = require("jsonwebtoken");
const cors = require("cors");
const app = express();

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  return res.send("Server is working!");
});

app.post("/auth", (req, res) => {
  const { email, password } = req.body;

  const user = { email: email, password: password };
  // TODO: Perform Real Login/SignUp using db

  const token = generateJWTtoken(user);

  return res.json({
    accessToken: token,
    user: user,
  });
});

// Get profile by getting user details from jwt
app.post("/profile", async (req, res) => {
  const { token } = req.body;
  console.log("WEB TOKEN:\n", token);

  try {
    const data = jwt.verify(token, process.env.JWT_SECRET_KEY);
    console.log("Data Found:", data);
    return res.json(data);
  } catch (err) {
    console.log("Error Found:", err.message);
    return res.status(404).send(err.message);
  }
});

app.listen(3000, () => {
  console.log("Listening at port 3000...");
});

function generateJWTtoken(user) {
  return jwt.sign(user, process.env.JWT_SECRET_KEY, { expiresIn: "5s" });
}
