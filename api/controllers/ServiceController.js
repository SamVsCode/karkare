/**
 * ServiceController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {

    new: function(req,res){
        (async function(){
            var all_services = await Service.find();
            res.json(all_services);
        }());
    },
    find: function(req,res){
        (async function(){
            var all_services = await Service.find(req.param('id'));
            res.json(all_services);
        }());
    },
    findCustomer: function(req,res){
        (async function(){
            var all_services = await Service.find({id: req.param("id")}).populate("customers");
            res.json(all_services);
        }());
    }

};

