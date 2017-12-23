/**
 * UserController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
    create: function (req, res) {
        console.log(req.body);
        (async function () {
            if (
                (req.body.name !== undefined && req.body.name !== "") &&
                (req.body.phone !== undefined && req.body.phone !== "") &&
                (req.body.housenum !== undefined && req.body.housenum !== "") &&
                (req.body.street !== undefined && req.body.street !== "")) {
                var userObj = {};
                userObj.name = req.body.name;
                userObj.phone = req.body.phone;
                userObj.email = req.body.email;
                userObj.house_num = req.body.housenum;
                userObj.street = req.body.street;
                userObj.landmark = req.body.landmark;
                try {
                    let newUser = await User.create(userObj).fetch();
                    let userService, userProduct;
                    if (newUser && newUser.id !== undefined && newUser.id !== "") {
                        if (req.body.requestType === "service" && req.body.serviceid !== undefined && req.body.serviceid !== "") {
                            userService = await UserService.create({
                                customer: newUser.id,
                                service: req.body.serviceid,
                                car_type: req.body.cartype || 0,
                                coating_size: req.body.coating_size || 0,
                                appt_date: req.body.apptdate,
                                appt_status: 1
                            }).fetch();
                        }
                        if (req.body.requestType === "product" && req.body.productid !== undefined && req.body.productid !== "") {
                            userProduct = await UserService.create({
                                customer: newUser.id,
                                product: req.body.productid,
                                appt_date: req.body.apptdate,
                                appt_status: 1
                            }).fetch();
                        }
                        if (userService || userProduct) {
                            var createdUser = await UserService.findOne({
                                customer: newUser.id
                            }).populate('customer').populate('service').populate('product');
                            if (createdUser) return res.json(createdUser);
                            else return res.json({error: "No user found"});
                        }
                    }
                } catch (err) {
                    return res.serverError(err)
                }
            } else {
                console.log("naaa");
            }
        }());
    },

    findAll: function (req, res) {
        (async function () {
            try {
                var user = await UserService
                    .find()
                    .populate("customer")
                    .populate("service")
                    .populate("product")
                    .populate("appt_status")                    
                res.json(user);
            } catch (err) {
                res.serverError(err);
            }
        }());
    },

    findOne: function (req, res) {
        (async function () {
            try {
                var user = await UserService
                    .find({
                        customer: req.param("id")
                    })
                    .populate("customer")
                    .populate("service")
                    .populate("product")
                    .populate("appt_status")
                res.json(user);
            } catch (err) {
                res.serverError(err);
            }
        }());
    }
};
