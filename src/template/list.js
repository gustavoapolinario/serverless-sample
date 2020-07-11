'use strict';
const { success, failure } = require("../utils/response")

class listController {
	async handleRequest(event, context, filter) {

		return this.facade.find(filter || {})
			.then(success)
			.catch(failure)
	}
}

module.exports = listController;
