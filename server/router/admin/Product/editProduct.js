let {
    db
} = require('../../tools')
let path = require('path');
let fs = require('fs');
let {
    ROOT,
    IMG_SAVE_DIR
} = require('../../../conf');
const {
    DH_UNABLE_TO_CHECK_GENERATOR
} = require('constants');

module.exports = (req, res) => {

    //执行提交之后，将缓存的图片转存到图片存储文件中
    let fileName = path.parse(req.body.img).base;
    let filePath = req.body.img;
    let insertObj = req.body;
    insertObj.img = path.join(ROOT, IMG_SAVE_DIR + fileName);
    //文件重存
    fs.renameSync(path.join(ROOT, filePath), insertObj.img, err => {
        if (err) {
            return res.json(ERROR.createProductError);
        }
    })
    //改变创建的数据，新的图片地址存入数据库中
    insertObj.img = IMG_SAVE_DIR + fileName;
    delete insertObj._id;


    db.collection('product').updateMany({
            id: req.body.id
        }, insertObj)
        .then(data => {
            res.json(data)
        })
        .catch(data => {
            res.json(data)
        })
}