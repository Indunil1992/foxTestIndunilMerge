let AWS = require('aws-sdk');
const ses = new AWS.SES();

exports.handler = function (event, context, callback) {

    ses.sendEmail({
        Destination: {
            ToAddresses: ['indunil@adroitlogic.com'],
            CcAddresses: ['sachithrarajapakse1992@gmail.com'],
            BccAddresses: []
        },
        Message: {
            Body: {
                Text: {
                    Data: `Body body `
                }
            },
            Subject: {
                Data: 'test Merge '
            }
        },
        Source: 'indunil@adroitlogic.com',
    }, function (err, data) {
        if (err) {console.log(err, err.stack);
         console.log("errorrrr");  } // an error occurred
        else console.log(data);     
        console.log("successs");        // successful response
    });

    callback(null, { "message": "Successfully executed" });
}