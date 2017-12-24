/**
 * Route Mappings
 * (sails.config.routes)
 *
 * Your routes tell Sails what to do each time it receives a request.
 *
 * For more information on configuring custom routes, check out:
 * https://sailsjs.com/anatomy/config/routes-js
 */

module.exports.routes = {
  '/': {
    controller: 'admin',
    action: 'dashboard'
  },
  'get /session': {
    controller: 'session',
    action: 'new'
  },
  'get /session/destroy': {
    controller: 'session',
    action: 'destroy'
  },
  'post /session/create': {
    controller: 'session',
    action: 'create'
  },
  'post /user/create': {
    controller: 'user',
    action: 'create'
  },
  'get /service': {
    controller: 'service',
    action: 'new'
  },
  'get /service/:id': {
    controller: 'service',
    action: 'find'
  },
  'get /service/:id/customer': {
    controller: 'service',
    action: 'findCustomer'
  },
  'get /user':{
    controller: 'user',
    action: 'findAll'
  },
  'get /user/:id':{
    controller: 'user',
    action: 'findOne'
  },
  'get /appointment/service/:id': {
    controller: 'admin',
    action: 'showService'
  },
  'get /appointment/product/:id': {
    controller: 'admin',
    action: 'showProduct'
  },
  'get /appointment/customer/:id': {
    controller: 'admin',
    action: 'showCustomer'
  },
  'get /appointment/phone/:phone': {
    controller: 'admin',
    action: 'showCustomerAppt'
  },
  'get /dashboard/service': {
    controller: 'admin',
    action: 'showAllServices'
  },
  'get /dashboard/product': {
    controller: 'admin',
    action: 'showAllProducts'
  },
  'post /appointment-status/update': {
    controller: 'admin',
    action: 'updateApptStatus'
  }

};
