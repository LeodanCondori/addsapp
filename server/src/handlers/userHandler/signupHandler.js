const { User } = require("../../db");

const signupHandler = async (req, res) =>
{
  try
  {
    const { email, password } = req.body;
    // const { email, password, id } = req.body;
    // Check if the user already exists in the database
    const existingUser = await User.findOne({ where: { email } });
    if (existingUser)
    {
      return res.status(400).json({ error: "User already exists" });
    }
    // Create a new user in the database
    const newUser = await User.create({ email, password });
    return res.status(201).json({ message: "User created successfully", user: newUser });
  } catch (error)
  {
    console.error("Error signing up user:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
};

module.exports = signupHandler;
