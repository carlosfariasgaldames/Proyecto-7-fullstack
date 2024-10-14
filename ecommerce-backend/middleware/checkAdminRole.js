
const jwt = require("jsonwebtoken");
const User = require("../models/User");

const checkAdminRole = async (req, res, next) => {
  try {
    const token = req.header("Authorization").replace("Bearer ", "");
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    const user = await User.findById(decoded.userId);

    if (!user || user.role !== "admin") {
      return res
        .status(403)
        .json({ message: "Acceso denegado: Se requiere rol de administrador" });
    }

    req.user = user;
    next();
  } catch (error) {
    res.status(401).json({ message: "No autorizado" });
  }
};

module.exports = checkAdminRole;
