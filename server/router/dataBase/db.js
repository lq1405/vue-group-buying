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
            mongo.MongoClient.connect(this.address, {
                useUnifiedTopology: true
            }, (err, client) => {
                if (err) {
                    reject(ERROR.dataBaseError);
                } else {
                    resolve({
                        db: client.db(this.dataBaseName).collection(this.collectionName),
                        client
                    })
                }
            })
        })
    }

    findOne(obj) {
        return new Promise((resolve, reject) => {
            //连接数据库
            this.connect()
                .then(({
                    db,
                    client
                }) => {
                    db.find(obj).toArray((err, data) => {
                        if (err) {
                            reject(ERROR.dataBaseError);
                        } else if (data.length) {
                            resolve(data);
                        } else {
                            reject(ERROR.userOrPasswordErr);
                        }
                    })
                })
        })
    }
}
module.exports = DataBase;