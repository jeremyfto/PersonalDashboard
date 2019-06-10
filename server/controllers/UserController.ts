var db = require('../config/mysql')
import {User} from '../models/User'
import {ToDoEntry} from '../models/ToDoEntry'
module.exports = {
    selectOne: (req, res)=>{
        db.query(``, function(err, user){
            if(err){throw err;}
            res.json({user})
        })
    }
}