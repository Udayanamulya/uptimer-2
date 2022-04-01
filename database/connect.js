const mongoose = require("mongoose");

async function connect() {
  mongoose.connect("mongodb+srv://Udayana:yes@cluster0.yobvp.mongodb.net/myFirstDatabase?retryWrites=true&w=majority" ,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: false,
    }
  );

  mongoose.connection.once("open", () => {
    console.log("Connected to Database");
  });
  return;
}

module.exports = connect;
