
exports.handler = function (event, context, callback) {
console.log("hii world");
    callback(null, { "message": "Successfully executed" });
}