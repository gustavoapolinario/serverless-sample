'use strict';
const facade = require('../databaseFacades/ProductFacade')
const Controller = require('../template/update')
module.exports.handler = async (event, context) => {
  const controller = new Controller()
  controller.facade = facade
  return controller.handleRequest(event, context)
}