let DataBase = require('./dataBase/db');
let {
    MONGO
} = require('../conf/index')
let db = new DataBase(MONGO.connectUrl, MONGO.dataBaseName);

module.exports = {
    db
};