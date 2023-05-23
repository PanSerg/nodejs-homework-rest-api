const mongoose = require('mongoose');

const app = require('./app')
// M54Mtg0IZP1O0Bj6
const DB_HOST =
  "mongodb+srv://Serhii:M54Mtg0IZP1O0Bj6@cluster0.xg8oslj.mongodb.net/my_contacts?retryWrites=true&w=majority";
mongoose.connect(DB_HOST)
  .then(() => {
    app.listen(3000, () => {
      console.log("Database connection successful");
    })
  })
  .catch(error => {
    console.log(error.message);
    process.exit(1);
  });
  
