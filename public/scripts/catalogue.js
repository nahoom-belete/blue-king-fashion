
var endOfList = false;
var beginningOfList = true;

function goToNextPage() {
    if(endOfList == true) {
        return;
    }
    
    var item = document.getElementsByClassName("page-item active").item(0);
    
    var prevButton = document.getElementById("previous");
    
    prevButton.classList.remove("disabled");

    if(item.nextElementSibling.id != "next") {
        item.classList.remove("active");
        item.nextElementSibling.classList.add("active")
        beginningOfList = false;
    }
    else {
        item.nextElementSibling.classList.add("disabled");
        endOfList = true;
    }
    loadNextProducts();
}

function goToPreviousPage() {
    if(beginningOfList == true) {
        return;
    }
    
    var item = document.getElementsByClassName("page-item active").item(0);
    var nextButton = document.getElementById("next");
    
    nextButton.classList.remove("disabled");

    if(item.previousElementSibling.id != "previous") {
        item.classList.remove("active");
        item.previousElementSibling.classList.add("active")
        endOfList = false;
    }
    else {
        item.previousElementSibling.classList.add("disabled");
        beginningOfList = true;
    }
}

function loadNextProducts() {
    alert(getProductImageList("footwear"));
}