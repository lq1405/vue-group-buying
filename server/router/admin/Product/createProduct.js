//创建商品
let {
    db
} = require('../../tools')
let path = require('path')

let fs = require('fs');
let {
    IMG_SAVE_DIR,
    ROOT,
    ERROR
} = require('../../../conf')
module.exports = (req, res) => {
    //执行提交之后，将缓存的图片转存到图片存储文件中
    let fileName = path.parse(req.body.img).base;
    let filePath = req.body.img;
    let insertObj = req.body;
    insertObj.id = Date.now().toString();
    insertObj.img = path.join(ROOT, IMG_SAVE_DIR + fileName);
    //文件重存
    fs.renameSync(path.join(ROOT, filePath), insertObj.img, err => {
        if (err) {
            return res.json(ERROR.createProductError);
        }
    })
    //改变创建的数据，新的图片地址存入数据库中
    insertObj.img = IMG_SAVE_DIR + fileName;

    db.collection('product').insertOne(insertObj)
        .then(data => {
            res.json({
                state: 1,
                msg: data
            })
        })
        .catch(
            data => {
                res.json(data)
            }
        )
}