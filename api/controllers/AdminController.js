/**
 * AdminController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */
const moment = require('moment');
module.exports = {
    dashboard: function(req,res){
        User.find().populate('services').then((data)=>{
            if(!data){
                return res.notFound();
            }else{
                console.log(data);
                return res.view('pages/dashboard', {all_users: data, moment: moment});
            }
        }).catch((err)=>{
            console.log(err);
            res.serverError(err);
        });
    }
};

