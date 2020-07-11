'use strict';
const facade = require('../databaseFacades/ProductFacade')
const createController = require('../template/create')
module.exports.handler = async (event, context) => {
  const controller = new createController()
  controller.facade = facade
  return controller.handleRequest(event, context)
}
