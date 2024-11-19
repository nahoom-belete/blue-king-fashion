const homeView = (req, res) => {
    res.render('pages/index', {
        heading : "",
        body: "Looking for a supplier to buy items in stock? We've got you covered! <br/>Visit us in store and have a chat or send us an email.",
    });
}

module.exports = { homeView, }