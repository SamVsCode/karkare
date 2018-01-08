/**
 * Bootstrap
 * (sails.config.bootstrap)
 *
 * An asynchronous bootstrap function that runs just before your Sails app gets lifted.
 * > Need more flexibility?  You can also do this by creating a hook.
 *
 * For more information on bootstrapping your app, check out:
 * https://sailsjs.com/config/bootstrap
 */

module.exports.bootstrap = async function (done) {

  // By convention, this is a good place to set up fake data during development.
  //
  // For example:
  // ```
  // // Set up fake development data (or if we already have some, avast)
  // if (await User.count() > 0) {
  //   return done();
  // }
  //
  // await User.createEach([
  //   { emailAddress: 'ry@example.com', fullName: 'Ryan Dahl', },
  //   { emailAddress: 'rachael@example.com', fullName: 'Rachael Shaw', },
  //   // etc.
  // ]);
  // ```

  // Don't forget to trigger `done()` when this bootstrap function's logic is finished.
  // (otherwise your server will never lift, since it's waiting on the bootstrap)

  if (await Service.count() > 0) {
    console.log("Services are already in db");
  } else {
    await Service.createEach([{ "createdAt": 1514124380, "updatedAt": 1514124380, "id": 1, "name": "Normal Car Wash" },
    { "createdAt": 1514124380, "updatedAt": 1514124380, "id": 2, "name": "Platinum Car Wash" },
    { "createdAt": 1514124380, "updatedAt": 1514124380, "id": 3, "name": "Platinum ECI" },
    { "createdAt": 1514124380, "updatedAt": 1514124380, "id": 4, "name": "Gold ECI" },
    { "createdAt": 1514124380, "updatedAt": 1514124380, "id": 5, "name": "Platinum Organic Coating" },
    { "createdAt": 1514124380, "updatedAt": 1514124380, "id": 6, "name": "Gold Organic Coating" },
    { "createdAt": 1514124380, "updatedAt": 1514124380, "id": 7, "name": "AC Vents Sterilization" },
    { "createdAt": 1514124380, "updatedAt": 1514124380, "id": 8, "name": "Engine Dust Protection" },
    { "createdAt": 1514124380, "updatedAt": 1514124380, "id": 9, "name": "Windshield Treatment" },
    { "createdAt": 1514124380, "updatedAt": 1514124380, "id": 10, "name": "Metal Wheel Polish" },
    { "createdAt": 1514124380, "updatedAt": 1514124380, "id": 11, "name": "Chaises Rubber Coating" },
    { "createdAt": 1514124380, "updatedAt": 1514124380, "id": 12, "name": "K3 Service Pro Treatment" },
    { "createdAt": 1514130453, "updatedAt": 1514130453, "id": 13, "name": "Brand Logo Beautification" },
    { "createdAt": 1514130453, "updatedAt": 1514130453, "id": 14, "name": "Headlight Restoration" }]);

    console.log("seed: created all services");
  }
  if (await Product.count() > 0) {
    console.log("Products are already in db");
  } else {
    await Product.createEach([{ "createdAt": 1514124380, "updatedAt": 1514124380, "id": 1, "name": "Cream wax" },
    { "createdAt": 1514124380, "updatedAt": 1514124380, "id": 2, "name": "Microfiber Cloth" },
    { "createdAt": 1514124380, "updatedAt": 1514124380, "id": 3, "name": "Glass Cleaner" },
    { "createdAt": 1514124380, "updatedAt": 1514124380, "id": 4, "name": "Dashboard Dresser" },
    { "createdAt": 1514124380, "updatedAt": 1514124380, "id": 5, "name": "Car Wash Shampoo" },
    { "createdAt": 1514124380, "updatedAt": 1514124380, "id": 6, "name": "Tyre Dresser" }]);
    console.log("seed: created all products");
  }

  if (await Admin.count() > 0) {
    console.log("Admin credentials already in db");
  } else {
    await Admin.create(
      {"createdAt":1514062923558,"updatedAt":1514062923558,"id":2,"username":"root","password":"root"}
    );
    console.log("seed: created the admin credentials");
  }
  if(await AppointmentStatus.count()>0){
    console.log("Appointment Status already created");
  }else{
    await AppointmentStatus.createEach([{"createdAt":1514112749,"updatedAt":1514112749,"id":1,"name":"New"},       
    {"createdAt":1514130453,"updatedAt":1514130453,"id":2,"name":"Processing"},
    {"createdAt":1514130453,"updatedAt":1514130453,"id":3,"name":"Finished"},  
    {"createdAt":1514130453,"updatedAt":1514130453,"id":4,"name":"Cancelled"}]);
    console.log("seed: created all appointment statuses");
  }
  return done();

};
