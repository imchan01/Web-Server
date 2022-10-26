const { verifyRegister } = require("../middlewares");
const controller = require("../controllers/auth.controllers");

module.exports = function(app) {
  app.use(function(req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  });

app.post(
    "/api/auth/register", function(req,res){
        [
            verifyRegister.checkDuplicateUsernameOrEmail,
            verifyRegister.checkRolesExisted
          ],
          controller.register
    }
  );

app.post("/api/auth/login",function(req,res){
    controller.signin
} );
};