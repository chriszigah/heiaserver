var passport = require("passport");
var bcrypt = require("bcrypt");
const LocalStrategy = require("passport-local").Strategy;
const Users = require("../models/users");
const Hash = require("../models/hash");

passport.use(
  new LocalStrategy(
    { usernameField: "username" },
    (username, password, done) => {
      // Match user
      Users.findUserByUsername(username).then((user) => {
        if (!user) {
          return done(null, false, { message: "Username not Register" });
        }
        console.log(user);
        // Match password
        Hash.findHashByID(user.id)
          .then((loginUser) => {
            bcrypt.compare(password, loginUser.hash, (err, isMatch) => {
              if (err) throw err;
              if (isMatch) {
                return done(null, user);
              } else {
                return done(null, false, {
                  message: "Wrong Email/Password Combination",
                });
              }
            });
          })
          .catch((err) => {
            console.log(err);
            return done(null, false, {
              message: "Auth failed - Wrong Email/Password Combination",
            });
          });
      });
    }
  )
);

passport.serializeUser((user, done) => done(null, user.id));

passport.deserializeUser(function (id, done) {
  console.log(id);
  Users.findUserByID(id, function (err, user) {
    done(err, user);
  });
});
