'use strict';
const { success, failure } = require("../utils/response")

class countController {

	async handleRequest(event, context) {
		return this.facade.count(this.customFilter || {})
			.then(success)
			.catch(failure)
	}
}

module.exports = countController;
