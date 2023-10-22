module.exports= function authorizationMiddleware(roles) {
  return (req, res, next) => {
    console.log('req:',req)
    const userRole = req.user.role;
    if (!roles.includes(userRole))
      return res.status(403).json("unauthorized access");
    // console.log('authormid')
    next();
  };
}

