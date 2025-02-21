const { Advert, User } = require("../db");

const populateAdvert = async () =>
{
  try
  {
    const users = await User.findAll(); // Retrieve existing users

    const advertData = [
      {
        announcement: "This is the first advert.",
      },
      {
        announcement: "Check out our latest deals!",
      },
      {
        announcement: "Limited time offer, don't miss out!",
      },
    ];

    // Add user association to each advert
    const adverts = advertData.map((data, index) =>
    {
      return {
        ...data,
        UserId: users[index % users.length].id, // Assign user id in a round-robin manner
      };
    });

    await Advert.bulkCreate(adverts);
    console.log("Adverts populated successfully.");
  } catch (error)
  {
    console.error("Error populating adverts:", error);
  }
};

module.exports = populateAdvert;
