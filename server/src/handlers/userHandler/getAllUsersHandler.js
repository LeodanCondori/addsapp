const { User } = require("../../db");

const getAllUsersHandler = async (req, res) =>
{
  try
  {
    // Fetch all adverts from the database
    const allUsers = await User.findAll();
    return res.status(200).json(allUsers);
  } catch (error)
  {
    console.error("Error fetching users:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
};

module.exports = getAllUsersHandler;
