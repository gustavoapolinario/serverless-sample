// Se the doc https://dynamoosejs.com/
const dynamoose = require('dynamoose');

if( process.env.IS_OFFLINE ) {
	dynamoose.aws.ddb.local("http://localhost:9000");
}

module.exports = dynamoose
