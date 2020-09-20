const mongoose = require("mongoose");


const AdSchema = new mongoose.Schema(
  {
    Username: { type: String },
    Password: { type: String },
    FullName: { type: String },
    Meals : {type : mongoose.Schema.Types.Mixed}
   
  },
  { collection: "Mst_Users" }
);


const Mst_Users = mongoose.model("Mst_Ads", AdSchema);
module.exports = Mst_Users;
