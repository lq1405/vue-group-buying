let {
    db
} = require('../../tools')
let {
    ROOT,
    ICONS_SAVE_DIR,
    MESSAGE
} = require('../../../conf')
let path = require('path');
let fs = require('fs');


module.exports = (req, res) => {
    let fileName = path.parse(req.body.img).base;
    let filePath = req.body.img;
    let insertObj = req.body;
    insertObj.img = path.join(ROOT, ICONS_SAVE_DIR + fileName);
    //文件重存
    fs.renameSync(path.join(ROOT, filePath), insertObj.img, err => {
        if (err) {
            return res.json(ERROR.createProductError);
        }
    })
    //改变创建的数据，新的图片地址存入数据库中
    insertObj.img = ICONS_SAVE_DIR + fileName;

    console.log(insertObj)
    db.collection('homeIcons').insertOne(insertObj)
        .then(data => {
            res.json(data)
        })
        .catch(data => {
            res.json(data)
        })

}