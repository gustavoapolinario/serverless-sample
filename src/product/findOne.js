'use strict';
const productFacade = require('../databaseFacades/ProductFacade')
const findOneController = require('../template/findOne')
module.exports.handler = async (event, context) => {
  const controller = new findOneController()
  controller.facade = productFacade
  return controller.handleRequest(event, context)
}