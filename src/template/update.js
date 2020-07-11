'use strict';
const { success, failure } = require("../utils/response")

class updateController {

	/*
	 * Remove elements from body
	 * This properties can't be set by user
	 */
	clearBody(body) {
		// immutable removal
		const { createdAt, updatedAt, email, user, provider, ...newBody } = body;
		return newBody
    }
    
    isValidId(id) {
        return id != null && id !=undefined && id.length > 0
    }
    
	async handleRequest(event, context) {
        const id = event.pathParameters.id
		const bodyCleared = this.clearBody(JSON.parse(event.body))
        if( !this.isValidId(id) ) {
			return failure("invalid id")
		}

		let filter = {
			...this.customFilter,
			id,
		}
        
		return this.facade.update(filter, bodyCleared)
			.then(success)
			.catch(failure)
	}
}

module.exports = updateController;
