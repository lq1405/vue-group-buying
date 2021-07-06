let mongo = require('mongodb');
let {
    ERROR
} = require('../../conf');

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
                    reject(ERROR.dataBaseError);
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
                            reject(ERROR.dataBaseError);
                        } else if (data.length) {
                            resolve(data);
                        } else {
                            reject(ERROR.userOrPasswordErr);
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
                            reject(ERROR.dataBaseError);
                        } else {
                            resolve('账号密码修改成功');
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
                            resolve('创建商品成功');
                        }
                    })
                })
                .catch(data => {
                    reject(data);
                })
        })
    }

}

module.exports = DataBase;