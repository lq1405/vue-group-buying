let DataBase = require('./dataBase/db');
let {
    MONGO
} = require('../conf/index')
let db = new DataBase(MONGO.connectUrl, MONGO.dataBaseName, MONGO.defaultCollection);

module.exports = {
    db
};