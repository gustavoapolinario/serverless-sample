'use strict';
module.exports.success = (body) => buildResponse(200, body);
module.exports.failure = (body) => buildResponse(500, body);

const buildResponse = (statusCode, body) => ({
    statusCode: statusCode,
    headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Credentials": true
    },
    body: JSON.stringify(body)
})
