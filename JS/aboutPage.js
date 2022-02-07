const connection = require("./engine")
const routes = require("./routes")

connection.set('view engine', 'ejs');
connection.set('views',"./Views");

connection.get(routes.about.url, (req, res) => {
    res.render(routes.about.view, {title: routes.about.name});
});

module.exports = connection;