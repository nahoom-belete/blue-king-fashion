const fs = require("fs");

const productList = {
    "headwear": "../images/catalogue/headwear/",
    "torso": "../images/catalogue/torso/",
    "trousers": "../images/catalogue/trousers/",
    "underwear": "../images/catalogue/underwear/",
    "footwear": "../images/catalogue/footwear/",
}


function getProductList(productType){
    fs.readdir(productList[productType], (err,files) => {
        files.forEach(file => {
            console.log(file);
        });
    });
}

export 
