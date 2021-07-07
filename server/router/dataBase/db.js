let mongo = require('mongodb');
let {
    ERROR,
} = require('../../conf');
let {
    MESSAGE
} = require('../../conf/MESSAGE')

class DataBase {
    //构造函数
    constructor(address, dataBaseName, collectionName) {
        this.address = address;
        this.dataBaseName = dataBaseName;
        this.collectionName = collectionName;
    }
    //切换集合的方法
    collection(collectionName) {
        this.collectionName = collectionName;
        //实现链式调用
        return this;
    }
    //连接到数据库
    connect() {
        return new Promise((resolve, reject) => {
            if (this.db) {
                return resolve(this.db)
            }
            mongo.MongoClient.connect(this.address, {
                useUnifiedTopology: true
            }, (err, client) => {
                if (err) {
                    reject(MESSAGE.dataBaseError);
                } else {
                    this.db = client.db(this.dataBaseName);
                    //监听程序的退出
                    process.on('exit', () => {
                        client.close();
                    })
                    resolve(this.db);
                }
            })
        })
    }
    //查找数据
    findOne(obj) {
        return new Promise((resolve, reject) => {
            //连接数据库
            this.connect()
                .then(db => {
                    db.collection(this.collectionName).find(obj).toArray((err, data) => {
                        if (err) {
                            reject(MESSAGE.dataBaseError);
                        } else if (data.length) {
                            resolve(data);
                        } else {
                            reject(MESSAGE.userOrPasswordError);
                        }
                    })
                })
                .catch(data => {
                    reject(data);
                })
        })
    }

    //更新一条数据
    updateOne(conditionObj, updateObj) {
        return new Promise((resolve, reject) => {
            this.connect()
                .then(db => {
                    db.collection(this.collectionName).updateOne(conditionObj, {
                        $set: updateObj
                    }, (err, data) => {
                        if (err) {
                            reject(MESSAGE.dataBaseError);
                        } else {
                            resolve(MESSAGE.dataUpdateSuccess);
                        }
                    })
                })
                .catch(data => {
                    reject(data);
                })
        })
    }

    //更新多条数据
    updateMany(conditionObj, updateObj) {
        return new Promise((resolve, reject) => {
            this.connect()
                .then(db => {
                    db.collection(this.collectionName).updateMany(conditionObj, {
                        $set: updateObj
                    }, (err, date) => {
                        if (err) {
                            console.log(err);
                            reject(MESSAGE.dataBaseError)
                        } else {
                            resolve(MESSAGE.dataUpdateSuccess);
                        }
                    })
                })
                .catch(data => {
                    reject(data);
                })
        })
    }


    //插入一条数据
    insertOne(insertObj) {
        return new Promise((resolve, reject) => {
            this.connect()
                .then(db => {
                    db.collection(this.collectionName).insertOne(insertObj, (err, data) => {
                        if (err) {
                            reject(ERROR.dataBaseError)
                        } else {
                            resolve(MESSAGE.dataInsertSuccess);
                        }
                    })
                })
                .catch(data => {
                    reject(data);
                })
        })
    }

    //删除一条数据
    deleteOne(conditionObj) {
        return new Promise((resolve, reject) => {
            this.connect()
                .then(db => {
                    db.collection(this.collectionName).deleteOne(conditionObj, (err, data) => {
                        if (err) {
                            reject(MESSAGE.dataBaseError);
                        } else {
                            resolve(MESSAGE.dataDeleteSuccess);
                        }
                    })
                })
                .catch(data => {
                    reject(data)
                })
        })
    }

}

module.exports = DataBase;