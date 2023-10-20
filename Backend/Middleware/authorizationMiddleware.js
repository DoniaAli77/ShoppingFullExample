function authorization(roles) {
  return (req, res, next) => {
    const userRole = req.user.role;
    if (!roles.includes(userRole))
      return res.status(400).json("unauthorized access");
    next();
  };
}

module.exports = { authorizationMiddleware: authorization };
