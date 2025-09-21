// const jwt = require("jsonwebtoken");

// const SECRET = process.env.JWT_SECRET || "super_secret_code";

// function middleware(req, res, next) {
//   // First check for token in Authorization header
//   const authHeader = req.headers.authorization;
//   if (authHeader && authHeader.startsWith('Bearer ')) {
//     const token = authHeader.substring(7);
//     try {
//       const decoded = jwt.verify(token, SECRET);
//       req.userId = decoded.id;
//       return next();
//     } catch (err) {
//       // Token is invalid, fall through to cookie check
//       console.log('Token authentication failed:', err.message);
//     }
//   }

//   // Then check for token in cookie - safely handle undefined cookies
//   const token = req.cookies?.token; // Use optional chaining
//   if (!token) {
//     return res.status(401).json({ message: "Unauthorized. Please login first." });
//   }

//   try {
//     const decoded = jwt.verify(token, SECRET);
//     req.userId = decoded.id;
//     next();
//   } catch (err) {
//     return res.status(401).json({ message: "Invalid or expired token" });
//   }
// }

// module.exports = { middleware };
const jwt = require("jsonwebtoken");

function middleware(req, res, next) {
  // Check for token in cookie only
  const token = req.cookies?.token;
  
  if (!token) {
    return res.status(401).json({ message: "Unauthorized. Please login first." });
  }

  try {
    const decoded = jwt.verify(token, SECRET);
    req.userId = decoded.id;
    next();
  } catch (err) {
    return res.status(401).json({ message: "Invalid or expired token" });
  }
}

module.exports = { middleware };