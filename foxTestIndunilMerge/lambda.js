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
                    Data: `test Text Body`
                }
            },
            Subject: {
                Data: 'test subject'
            }
        },
        Source: 'indunil@adroitlogic.com',
    }, function (err, data) {
        if (err) {console.log(err, err.stack); // an error occurred
        console.log("an error occurred:SES");}
        else console.log(data);           // successful response
        console.log("successful response:SES");
    });

    callback(null, { "message": "Successfully executed" });
}