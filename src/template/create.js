'use strict';
const getUserSubOfAuthenticatedUser = require('../utils/getUserSubOfAuthenticatedUser')
const { success, failure } = require("../utils/response")

class createController {

	/*
	 * Remove elements from body
	 * This properties can't be set by user
	 */
	clearBody(body) {
		// immutable removal
		const { id, createdAt, email, user, updatedAt, ...newBody } = body;
		return newBody
	}

	async handleRequest(event, context) {
		const userSub = await getUserSubOfAuthenticatedUser(event)

		const bodyCleared = {
			...this.clearBody(JSON.parse(event.body)),
			user: userSub
		}
		return this.facade.create(bodyCleared)
			.then(success)
			.catch(failure)
	}
}

module.exports = createController;
