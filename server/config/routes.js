// get quote controller
const User = require('../controllers/UserController')
// access a url, and calls the callback
module.exports = (app) => {

    // All other routes go to Angular
    app.all("*", (req,res,next) => {
        res.sendFile(path.resolve("./public/dist/public/index.html"))
      });
}