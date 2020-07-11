class DBFacade {

	create(body) {
		const model = new this.model(body);
		return model.save({return: 'document'});
	}

	find(...args) {
		return this.model
			.scan(...args)
			.exec();
	}

	findOne(...args) {
		return this.model
			.findOne(...args)
			.exec();
	}

	findById(...args) {
		return this.model
			.get(...args)
	}

	update(...args) {
		return this.model
			.update(...args)
	}

	remove(...args) {
		return this.model
			.delete(...args)
	}

	count(...args) {
		return this.model
			.scan(...args)
			.counts()
			.exec()
			.then(result => ({ ...result[0] }))
	}
}

module.exports = DBFacade;