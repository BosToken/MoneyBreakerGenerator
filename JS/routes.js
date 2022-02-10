const routes = {
    index:
    {
        name : "Index Page",
        url : "/",
        view : "Pages/index.ejs"
    },
    about:
    {
        name : "About Page",
        url : "/about",
        view : "Pages/about.ejs"
    },
    gatcha:
    {
        name : "Gatcha Page",
        url : "/gatcha",
        view : "Pages/gatcha.ejs"
    },
    money:
    {
        name : "Money Page",
        url : "/money",
        view : "Pages/money.ejs"
    },
    error:
    {
        name : "Error Page",
        url : "/*",
        view : "Pages/error.ejs"
    },
    member:
    {
        name : "",
        url : "/member/:member",
        view : "Pages/member.ejs"
    }
};

module.exports = routes;