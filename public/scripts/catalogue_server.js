const fs = require("fs");
const { resolve } = require("path");

const productList = {
    "headwear": "/public/images/catalogue/headwear/",
    "torso": "./public/images/catalogue/torso/",
    "trousers": "./public/images/catalogue/trousers/",
    "underwear": "./public/images/catalogue/underwear/",
    "footwear": "./public/images/catalogue/footwear/",
}

function getProductImageList(productType) {   
    //https://stackoverflow.com/questions/6287908/nodejs-express-fs-iterating-files-into-array-or-object-failing
    //Refer to top user kochod explaining that readdir return array of files
    var pList = fs.readdirSync(productList[productType], (err,files) => {
        if (err) {
            console.error(err);
        } 
    });
    return pList

}

module.exports = { getProductImageList }