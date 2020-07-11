const { success, failure } = require("../utils/response")
const hello =  async (event, context) => {
    console.log("EVENT: \n" + JSON.stringify(event, null, 2))
    //return context.logStreamName
    return success("hello")
}
const world =  async (event, context) => {
    console.log("EVENT: \n" + JSON.stringify(event, null, 2))
    //return context.logStreamName
    return success("world")
}

module.exports = {
    hello,
    world
}