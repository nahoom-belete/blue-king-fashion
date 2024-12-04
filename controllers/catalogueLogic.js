const fs = require("fs");

var pList = []
var listSize = 0;
var currIndex = 0;
var pageSize = 8;
var numPages = 0;
var currentPage = 1;


const catalogueView = (req, res) => {
    listSize = 0, currIndex = 0, pageSize = 8, numPages = 0;
    const { category } = req.body;
    pList = getProductImageList(category);
    listSize = pList.length;
    numPages = Math.ceil(listSize / pageSize);
    nextPage(req, res, category);
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

const nextPage = (req, res) => {
    const { category } = req.body;
    var endIndex = currIndex + pageSize;
    currentPage += 1;
    if(endIndex > listSize) {
        var correction = endIndex - listSize;
        endIndex -= correction;
    }
    res.render('pages/catalogue',{
        imgPath: imagePaths[category],
        subtitle: category,
        pgList: pList,
        cIndex: currIndex,
        eIndex: endIndex,
        pages: numPages,
        currPage: currentPage,
    });
    currIndex = endIndex;
}

module.exports = { catalogueView, nextPage }