const passport = require("passport");



exports.googleAuth = passport.authenticate('google', { scope: ['profile', 'email'] });
exports.googleRedirect =(req, res) => {
    res.cookie('token', req.authToken, {
      httpOnly: true, // Prevents JavaScript access to cookie
      secure: process.env.NODE_ENV === 'production', // Use secure in production
      maxAge: 7 * 24 * 60 * 60 * 1000 // 7 days in milliseconds
    });
    
    // Redirect to your frontend
    res.redirect('http://localhost:3000');
  }