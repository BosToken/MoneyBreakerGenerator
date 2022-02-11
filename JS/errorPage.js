const connection = require("./engine");
const routes = require("./routes");

connection.get(routes.error.url, (req, res) => {
    res.render(routes.error.view, {title : routes.error.name});
});

module.exports = connection;