const mongoose = require("mongoose");

const mongoURI =
  "mongodb://food:aple123@ac-0tzbxt8-shard-00-00.vvwumor.mongodb.net:27017,ac-0tzbxt8-shard-00-01.vvwumor.mongodb.net:27017,ac-0tzbxt8-shard-00-02.vvwumor.mongodb.net:27017/gofoodmern?ssl=true&replicaSet=atlas-9qwzb0-shard-0&authSource=admin&retryWrites=true&w=majority";
const mongoDB = async () => {
  await mongoose.connect(
    mongoURI,
    { useNewUrlParser: true, useUnifiedTopology: true },
    async (err, result) => {
      if (err) console.log("---", err);
      else {
        console.log("connected");
        const fetched_data = await mongoose.connection.db.collection("food");
        fetched_data.find({}).toArray(function (err, data) {
          if (err) console.log(err);
          else console.log();
        });
      }
    }
  );
};

module.exports = mongoDB;
