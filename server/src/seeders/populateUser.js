const { User } = require("../db");

const populateUser = async () =>
{
  try
  {
    await User.bulkCreate([
      { id: 1, email: 'user1@example.com', password: 'password1' },
      { id: 2, email: 'user2@example.com', password: 'password2' },
      { id: 3, email: 'user3@example.com', password: 'password3' }
    ]);
    console.log('Users populated successfully.');
  } catch (error)
  {
    console.error('Error populating users:', error);
  }
}

module.exports = populateUser;
