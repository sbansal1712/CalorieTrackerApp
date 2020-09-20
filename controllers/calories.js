const Mst_Users = require("../models/users");



exports.updateMeals = async (req, res) => {
    try {
      
      var user = await Mst_Users.findOne({Username : req.body.Username}).exec()
      
      user.set(req.body)

      var result = await user.save()
      delete result.__v;
      delete result.password
      console.log(result)
      return res.send(result);
    } catch (err) {
      return res.send(err);
    }
  };