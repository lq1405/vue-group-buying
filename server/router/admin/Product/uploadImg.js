//创建商品的上传图片的接口
//引入模块
let Formidable = require('formidable');
let path = require('path');
let fs = require('fs')
let {
    IMG_CACHE_DIR,
    IMG_SAVE_DIR,
    ROOT,
    ERROR
} = require('../../../conf')

module.exports = (req, res) => {
    let form = new Formidable();
    //修改缓存的目录
    form.uploadDir = path.join(ROOT, IMG_CACHE_DIR);
    //接收数据
    form.parse(req, (err, fields, files) => {
        // console.log(err, 0000000, fields, 11111, files)
        if (err) {
            return res.json(ERROR.imgCacheError);
        }
        //将缓存的图片转存
        let fileName = path.parse(files.file.path).name.split('_')[1];
        //图片的新地址
        let filePath = IMG_CACHE_DIR + fileName + path.extname(files.file.name)

        fs.renameSync(files.file.path, path.join(ROOT, filePath), err => {
            if (err) {
                return res.json(ERROR.imgResaveError);
            }
        })
        res.json({
            errno: 0,
            img: filePath
        })

    })
}