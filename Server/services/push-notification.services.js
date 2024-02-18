const { ONE_SIGNAL_CONFIG } = require("../config/app.config");
const pushNotificationService = require("../services/push-notification.services");

async function sendNotification(data, callback) {
    var headers = {
        "Content-Type": "application/json; charset=utf-8",
        "Authorization": "Basic " + ONE_SIGNAL_CONFIG.API_KEY,
    };

    var options = {
        host: "onesignal.com",
        port: 443,
        path: "/api/v1/notifications",
        method: "POST",
        headers: headers
    };

    var https = require("https");
    var req = https.request(options, function(res){
        let responseData = '';
        res.on("data", function(data){
            responseData += data;
        });
        res.on("end", function(){
            console.log(JSON.parse(responseData));
            return callback(null, JSON.parse(responseData));
        });
    });

    req.on("error", function(e){
        return callback({
            message: e
        });
    });

    req.write(JSON.stringify(data));
    req.end();
}

module.exports = {
    sendNotification
};