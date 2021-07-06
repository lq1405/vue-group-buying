//商品列表的文件

let {
    db
} = require('../../tools')
module.exports = (req, res) => {
    let {
        page
    } = req.query;
    db.collection('product').findOne({})
        .then(data => {
            //按照id进行降序排序
            data.sort((obj1, obj2) => {
                if (obj1.id > obj2.id) {
                    return -1;
                } else if (obj1.id < obj2.id) {
                    return 1;
                } else {
                    return 0;
                }
            })
            let b = data.slice(+page * 10 - 10, +page * 10)
            res.json(b);
        })
        .catch(data => {
            res.json(data)
        })
}