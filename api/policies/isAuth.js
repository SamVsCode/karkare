module.exports = function isAuth(req,res,next){
    if(!req.session.isAuthenticated){
        res.redirect('/session');
    }else{
        next();
    }
}