const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  name: String,
  age: { type: Number, default: 25 },
  country: { type: String, required: true, enum: ["USA", "India", "KSA"] },
});

const Usermodel = mongoose.model("user", userSchema);

const main = async () => {
  try {
    const connection = await mongoose.connect(
      "mongodb://127.0.0.1:27017/mngclass"
    );
    console.log("connected to server");
    await Usermodel.insertMany([{ name: "Aakash", country: "India" }]);
    console.log("data inserted");
    //  const user=await Usermodel.find()
    //  console.log(user);
  } catch (err) {
    console.log("Error in connecting");
    console.log(err);
  }
};
main();
