// get quote controller
const UserController = require('../controllers/UserController')
const ToDoListController = require('../controllers/ToDoListController')
// access a url, and calls the callback
module.exports = (app) => {

    // All other routes go to Angular
    app.all("*", (req,res,next) => {
        res.sendFile(path.resolve("./public/dist/public/index.html"))
      });
}