export const localsmiddleware = (req, res, next) =>{
    res.locals.siteName = "wetube";
    res.locals.loggedIn = Boolean(req.session.loggedIn);
    res.locals.loggedInUser = req.session.user;
    console.log(res.locals);
    next();
}