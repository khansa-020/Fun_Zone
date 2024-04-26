
const jwt = require('jsonwebtoken');
const dotenv= require ("dotenv");

dotenv.config();
const secret = process.env.JWT_KEY;
const authMiddleWare = async (req, res, next) => {
  try {
    const token = req.headers["authorization"];
    console.log(token)
    if (token) {
      const decoded = jwt.verify(token, secret);
      console.log(decoded)
      req.body._id = decoded?.id;
    }
    next();
  } catch (error) {
    console.log(error+"inside middleware")
    console.log(error);
  }
};

module.export= {authMiddleWare};


//eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NjJiNjViODRlZTc5M2Q2MzdhNzY3NmMiLCJpYXQiOjE3MTQxMjAxMjAsImV4cCI6MTcxNDIwNjUyMH0.RKNXekeTBmdFbBpn50fTZzNRh7iavWrSImnRlh2b8WM

//   eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NjJiNWI0NThjZWViYzFhMmUxYjZmNGQiLCJpYXQiOjE3MTQxMTc0NDUsImV4cCI6MTcxNDIwMzg0NX0.hpLRMsygP9gRUVpqQgnTmxL0rqVcdZyFQFMfPo9A28Y