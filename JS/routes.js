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
    error:
    {
        name : "Error Page",
        url : "/*",
        view : "Pages/error.ejs"
    }
};

module.exports = routes;