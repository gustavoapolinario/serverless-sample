'use strict';
const dev = {
        /*accessKeyId: '??',
        secretAccessKey: '??',*/
        region: 'us-east-1',
}
const prod = {
        region: 'us-east-1',
}

module.exports = process.env.IS_OFFLINE === 'true' ? dev : prod;