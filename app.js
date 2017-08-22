const request = require('request');
const yargs = require('yargs');

const urlGoogle = 'http://maps.googleapis.com/maps/api/geocode/json?address='
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
const urlEncoded = encodeURIComponent(argv.a);


request({
    url: urlGoogle + "" + urlEncoded,
    json: true
}, (error, response, body) =>{
    if(error){
        return error
    }else{
   console.log(`${body.results[0].formatted_address}
   ${body.results[0].geometry.location.lat}
   ${body.results[0].geometry.location.lng}`)

}});