/**
 * User_service.js
 *
 * @description :: A model definition.  Represents a database table/collection/etc.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {
  tableName: 'user_service',
  attributes: {

    //Primitives
    customer:{
      model: 'user'
    },
    car_type:{
      type: "number"
    },
    coating_size:{
      type: "number"
    },
    appt_date:{
      type: "number"
    },
    
    //Associations
    service:{
      model: 'service'
    },
    product:{
      model: 'product'
    },
    appt_status:{
      model: 'appointmentstatus'
    }

  },

};

