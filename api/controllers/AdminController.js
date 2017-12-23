/**
 * AdminController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */
const moment = require('moment');
module.exports = {
    dashboard: function(req,res){
        (async function(){
            try{
                var populatedData = await UserService
                .find()
                .populate("customer")
                .populate("service")
                .populate("product")
                .populate("appt_status");
                if(!populatedData) return res.notFound();
                return res.view('pages/dashboard', {all_users: populatedData, moment: moment});
            }catch(err){
                console.log(err);
                return res.serverError(err);
            }
        }());
    },
    showService: function(req,res){
        (async function(){
            try{
                var serviceData = await UserService
                                            .find({id: req.param("id")})
                                            .populate('service')
                                            .populate('product')
                                            .populate('appt_status');
                console.log(serviceData);
                res.view("pages/servicedetail",{data: serviceData});
            }catch(err){

            }
        }());
    },
    showProduct: function(req,res){
        (async function(){
            try{

            }catch(err){
                
            }
        }());
    }
};