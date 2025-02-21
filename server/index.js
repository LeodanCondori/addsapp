const server = require('./src/app.js');
const { conn } = require('./src/db.js');
const populateUser = require("./src/seeders/populateUser.js");
const populateAdvert = require("./src/seeders/populateAdvert.js");

// conn.sync({ force: true }).then(() =>
// {
//   server.listen(3001, () =>
//   {
//     console.log('%s listening at 3001');
//   });
// });

conn.sync({ force: true })
  .then(() =>
  {
    console.log('Database synced');
    return populateUser(); // Call populateUser function after database sync
  })
  .then(() =>
  {
    console.log('Users populated');
    return populateAdvert(); // Call populateAdvert function after users are populated
  })
  .then(() =>
  {
    console.log('Adverts populated');
    server.listen(3001, () =>
    {
      console.log('Server listening at port 3001');
    });
  })
  .catch((error) =>
  {
    console.error('Error syncing database:', error);
  });
