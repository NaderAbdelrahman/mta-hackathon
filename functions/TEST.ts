import * as Mta from 'mta-gtfs';
import * as request from  'request';

request('http://httpstat.us/500', function (error, response, body) {
    return body;
});

const mta = new Mta({
    key: "9855a16a7f459ecc79118f055d32996b"
});

const mtaRoute = "http://traintimelb-367443097.us-east-1.elb.amazonaws.com/";

// mta.schedule("H08", 26)
// 	.catch((err) => {
// 		console.error(err);
// 	})
// 	.then((res) => {
// 	console.log(res);
// });
// mta.schedule("S31", 11).then((res) => console.log(JSON.stringify(res)));