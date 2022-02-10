const connection = require("./engine");
const routes = require("./routes");
const member = require("./member");

connection.get(routes.member.url, (req, res) => {
    let name = req.params.member; // test

    res.render(routes.member.view, 
        {
            title : req.params.member,
            name: member[name].name, 
            banner: member[name].banner,
            photoProfile : member[name].photoProfile,
            text : member[name].text,
            git : member[name].gitLink,
            email : member[name].gmail,
            high : member[name].highlight,
            location : member[name].location,
            company : member[name].company,
        });
});

module.exports = connection;