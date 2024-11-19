const fs = require("fs");

const catalogueView = (req, res) => {
    const { category } = req.body;
    const pList = getProductImageList(category);
    res.render('pages/catalogue',{
        subtitle: category,
        img1: imagePaths[category] + pList[0],
        img2: imagePaths[category] + pList[1],
        img3: imagePaths[category] + pList[2],
        img4: imagePaths[category] + pList[3],
        img5: imagePaths[category] + pList[4],
    });
}
 
imagePaths = {
    "footwear" : "public/images/catalogue/footwear/"
}

const getProductImageList = (category) => {   
    //https://stackoverflow.com/questions/6287908/nodejs-express-fs-iterating-files-into-array-or-object-failing
    //Refer to top user kochod explaining that readdir return array of files

    var pList = fs.readdirSync(imagePaths[category], (err,files) => {
        if (err) {
            console.error(err);
        } 
    });
    return pList
}

module.exports = { catalogueView }