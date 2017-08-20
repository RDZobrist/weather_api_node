const request = require('request');

request({
    url: 'http://maps.googleapis.com/maps/api/geocode/json?address=9028%20east%20lupine%20avenue',
    json: true
}, (error, response, body) =>{
console.log(body);
});