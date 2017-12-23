/**
 * SessionController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {

    new: function(req,res){
        if(req.session.isAuthenticated === true){
            return res.redirect('/');
        }
        res.locals.flash = _.clone(req.session.flash);
        req.session.flash = {};
        res.view('pages/login');
    },
    create: function(req,res){
        if(req.body.username === "" || req.body.password === ""){
            req.session.flash = {err: "Username or pass empty"};
            return res.redirect('/session');
        }else{
            Admin.findOne({username: req.body.username}).then((data)=>{
                if(!data){
                    req.session.flash = {err: "Username or password incorrect."};
                    return res.redirect('/session');
                }
                req.session.flash = {err: "Logged In!!!"};
                req.session.isAuthenticated = true;
                req.session.User = data;
                res.locals.User = data.username;            
                return res.redirect('/');
            }).catch((error)=>{
                console.log(" +-+-+-+-+-+");
                console.log(" |E|R|R|O|R|");
                console.log(" +-+-+-+-+-+");
                console.log("sessionController.js #35");                
                req.session.flash = {err: error};
                res.redirect('/session');
            });
        }
    },
    destroy: function(req,res){
        req.session.isAuthenticated = false;
        delete req.session.isAuthenticated;
        return res.redirect('/session');
    }

};

