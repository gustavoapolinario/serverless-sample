'use strict';
const { success, failure } = require("../utils/response")

class deleteController {

    isValidId(id) {
        return id != null && id !=undefined && id.length > 0
	}
	
	async handleRequest(event, context) {
        const id = event.pathParameters.id
        if( !this.isValidId(id) ) {
			return failure("invalid id")
        }

		let filter = {
			...this.customFilter,
			id,
		}
        console.log(filter)
		return this.facade.remove(filter)
			.then(success)
			.catch(failure)
	}
}

module.exports = deleteController;
