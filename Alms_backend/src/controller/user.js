const User = require("../models/users");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

exports.userSignup = (req, res) => {
  User.findOne({ email: req.body.email }, async function (err, user) {
    if (err || user) {
      return res.status(400).json({
        message: "User Already Registered with this mailId",
      });
    } else {
      const { Name, email, password, phoneNo } = req.body;
      const hash_password = await bcrypt.hash(password, 10);
      const _user = new User({
        Name,
        email,
        hash_password,
        phoneNo,
      });

      _user.save((error, user) => {
        if (error) {
          console.log(error);
          return res.status(400).json({
            message: "Something Went Wrong",
          });
        }

        if (user) {
          const token = jwt.sign(
            { _id: user._id, email: user.email },
            process.env.JWT_SECRET,
            {
              expiresIn: "1d",
            }
          );
          return res.status(200).json({
            token,
            user,
            message: "user created",
          });
        }
      });
    }
  });
};

exports.userSignin = (req, res) => {
  User.findOne({ email: req.body.email }, (err, user) => {
    if (err) {
      console.log(err);
    } else {
      if (user) {
        if (user.authenticate(req.body.password)) {
          const token = jwt.sign(
            { _id: user._id, email: user.email },
            process.env.JWT_SECRET,
            { expiresIn: "1d" }
          );
          res.status(200).json({
            token,
            user,
          });
        } else {
          return res.status(400).json({
            message: "Invalid Password",
          });
        }
      } else {
        return res.status(400).json({ message: "Something went wrong" });
      }
    }
  });
};

exports.getUser = async (req, res) => {
  try {
    const user = await User.findById(req._id);
    res.status(200).json(user);
  } catch (err) {
    res.status(400).json({ message: "Something went wrong" });
  }
};
