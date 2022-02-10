const connection = require("./engine")
const routes = require("./routes")
const gatcha = require('@bostoken/waifu-gatcha');
const quote = require("inspirational-quotes");

let waifu = {};
setInterval(() => {
    waifu = {...gatcha.waifuGatcha()};
}, 500);


connection.get(routes.gatcha.url, (req, res) => {

    if(waifu.star === 3)
    {
        starsss = "⭐⭐⭐"
    }
    else if(waifu.star === 4)
    {
        starsss = "⭐⭐⭐⭐"
    }
    else if(waifu.star === 5){
        starsss = "⭐⭐⭐⭐⭐"
    }
    else{
        starsss = "Undified"
    }

    res.render(routes.gatcha.view, {
        title : routes.gatcha.name,
        nameChar : waifu.name,
        animeName : waifu.anime,
        pictureChar : waifu.picture,
        grade : starsss,
    });
});

module.exports = connection;