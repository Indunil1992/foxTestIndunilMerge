exports.handler = function (event, context, callback) {
console.log("GM Alll");
    callback(null, { "message": "Successfully executed" });
}