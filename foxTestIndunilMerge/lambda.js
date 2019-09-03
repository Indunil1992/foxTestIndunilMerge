let AWS = require('aws-sdk');
const sns = new AWS.SNS();

exports.handler = function (event, context, callback) {
    sns.listSubscriptionsByTopic({
        TopicArn: 'arn:aws:sns:us-east-1:318300609668:testsnsindunil'
    }).promise()
        .then(data => {
                        console.log(data);
                                    console.log("successs");


            // your code goes here
        })
        .catch(err => {
            // error handling goes here
            console.log(err);
            console.log("errorrr");
        });

    callback(null, { "message": "Successfully executed" });
}