const { Advert } = require("../../db");

const getAllAdvertsHandler = async (req, res) =>
{
  try
  {
    // Fetch all adverts from the database
    const allAdverts = await Advert.findAll();
    return res.status(200).json(allAdverts);
  } catch (error)
  {
    console.error("Error fetching adverts:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
};

module.exports = getAllAdvertsHandler;
