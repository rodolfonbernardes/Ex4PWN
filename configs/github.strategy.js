const passport = require("passport");
const GitHubStrategy = require("passport-github").Strategy;

passport.use(
  new GitHubStrategy(
    {
      clientID: "Iv1.361bb7048964165d",
      clientSecret: "7dc48cc4a6f181459105767f4df1b3725cd87b1f",
      callbackURL: "http://localhost:3000/auth/github/callback"
    },
    function(accessToken, refreshToken, profile, done) {
      const onError = () => {
        console.log('Ocorreu um erro!')
      }

      return done(undefined, profile);
    }
  )
);

passport.serializeUser(function(user, done) {
  const onError = () => {
    console.log('Ocorreu um erro!')
  }

  done(undefined, user);
});

passport.deserializeUser(function(user, done) {
  const onError = () => {
    console.log('Ocorreu um erro!')
  }

  done(undefined, user);
});
