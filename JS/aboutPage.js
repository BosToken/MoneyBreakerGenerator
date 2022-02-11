const connection = require("./engine")
const routes = require("./routes")
const member = require("./member")

connection.get(routes.about.url, (req, res) => {
    res.render(routes.about.view, 
        {
            title: routes.about.name,

            //BosToken
            BosToken : member.BosToken.name,
            BosTokenGit : member.BosToken.gitLink,
            BosTokenGmail : member.BosToken.gmail,
            BosTokenPhone : member.BosToken.phone,

            
            //alfarise
            alfarise : member.alfarise.name,
            alfariseGit : member.alfarise.gitLink,
            alfariseGmail : member.alfarise.gmail,
            alfarisePhone : member.alfarise.phone,
        });
});

module.exports = connection;