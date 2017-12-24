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
                                            .findOne({id: req.param("id")})
                                            .populate('service')
                                            .populate('product')
                                            .populate('customer')
                                            .populate('appt_status');
                var appt = await AppointmentStatus.find();
                var userData =  serviceData.customer || {};
                res.view("pages/servicedetail",
                {
                    service_data: serviceData,
                    data: userData,
                    page_name: "dashboard",
                    moment,
                    appt
                });
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
                var userData = await User.findOne({id: req.param("id")});
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
    },
    showAllServices: function(req,res){
        (async function(){
            try{
                var allServices = await UserService.find({where: { service: {'!=': null}}, sort: 'appt_date DESC'}).populate('customer').populate('service');
                return res.view("pages/servicesproducts",
                {
                    all_users: allServices,
                    moment,
                    page_name: "service"
                });
            }catch(err){
                res.serverError(err);
            }
        }());
    },
    showAllProducts: function(req,res){
        (async function(){
            try{
                var allServices = await UserService.find({where: { service: {'!=': null}}, sort: 'appt_date DESC'}).populate('customer').populate('service');
                return res.view("pages/servicesproducts",
                {
                    all_users: allServices,
                    moment,
                    page_name: "service"
                });
            }catch(err){
                res.serverError(err);
            }
        }());
    },
};