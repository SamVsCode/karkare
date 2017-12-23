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
                return res.view('pages/dashboard', {all_users: populatedData, moment: moment, page_name: "dashboard"});
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
                res.view("pages/servicedetail",{data: serviceData, page_name: "dashboard"});
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
    },
    showCustomer: function(req,res){
        (async function(){
            try{
                var userData = await User.find({id: req.param("id")});
                console.log(userData);
                res.view("pages/userprofile",{data: userData, page_name: "dashboard"});                
            }catch(err){
                res.serverError(err);
            }
        }());
    },
    showCustomerAppt: function(req,res){
        (async function(){
            try{
                var allUser = await User.find({phone: req.param("phone")}).populate("services");
                res.json(allUser);
            }catch(err){
                res.serverError(err);
            }
        }());
    }
};