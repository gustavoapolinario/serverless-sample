'use strict';
const { success, failure } = require("../utils/response")

class findOneController {

    isValidId(id) {
        return id != null && id !=undefined && id.length > 0
	}
	
	async handleRequest(event, context) {
        const id = event.pathParameters.id
        if( !this.isValidId(id) ) {
			return {
				statusCode: 500,
				body: JSON.stringify("invalid id")
			}
		}
		
		return this.facade.findById(id)
			.then(result => {
				if( this.customFilter )
					for (const key in this.customFilter)
						if ( this.customFilter.hasOwnProperty(key) && result[key] !== this.customFilter[key] ) 
							return failture('Usuário Inválido')
				return success(result)
			})
			.catch(failure)
	}
}

module.exports = findOneController;
