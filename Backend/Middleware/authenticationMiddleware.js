const jwt= require('jsonwebtoken')
function authentication(req, res, next) {
    const cookie = req.headers.cookies;
    if(!cookie){
        return res.status(401).json({ message: 'No Cookie provided' });
    } 
    const token=cookie.token
    if (!token) {
      return res.status(401).json({ message: 'No token provided' });
    }
  
    jwt.verify(token, secretKey, (error, decoded) => {
      if (error) {
        return res.status(401).json({ message: 'Invalid token' });
      }
  
      // Attach the decoded user ID to the request object for further use
      req.user = decoded.user;
      next();
    });
  }
  module.exports={authMiddleware:authentication}