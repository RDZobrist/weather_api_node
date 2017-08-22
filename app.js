const request = require('request');
const yargs = require('yargs');
const geocode = require('./geocode/geocode')

// const urlGoogle = 
const argv = yargs
    .options({
        a: {
            demand: true,
            alias: 'address',
            describe: 'Adress to fecth the weather for',
            string: true
        }
})
.help()
.alias('help', 'h')
.argv;
let urlEncoded = encodeURIComponent(argv.a);


request({
    url: `https://maps.googleapis.com/maps/api/geocode/json?address=${urlEncoded}`,
    json: true
}, (error, response, body) => {
 
    if (error)
    {
        console.log('unable to connect to the google servers, sorry :(');
    }
    else if (body.status === 'ZERO_RESULTS')
    {
        console.log('Unable to find that address.')
    }
    else if(body.status === 'OK')
    {   
    console.log(`${body.results[0].formatted_address}
   ${body.results[0].geometry.location.lat}
   ${body.results[0].geometry.location.lng}`)

}});