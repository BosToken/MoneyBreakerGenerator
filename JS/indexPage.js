const connection = require("./engine");
const routes = require("./routes");
const member = require("./member");

connection.get(routes.index.url, (req, res) => {
    res.render(routes.index.view, 
        {
            title : routes.index.name, 
            members: [
                member.BosToken.name, member.alfarise.name
            ],
        });
});

module.exports = connection;
