const DBFacade = require('./DBFacade');
const productSchema = require('../databaseSchema/ProductSchema');
const dynamoose = require('../config/dynamoose');

class ProductFacade extends DBFacade {
	constructor() {
        super()
		this.model = dynamoose.model(process.env.PRODUCT_TABLE, productSchema);
	}
}

module.exports = new ProductFacade()