const connection = require("./engine");
const routes = require("./routes");

connection.set('view engine', 'ejs');
connection.set('views',"./Views");

connection.get(routes.error.url, (req, res) => {
    res.render(routes.error.view, {title : routes.error.name});
});

module.exports = connection;