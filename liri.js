var keys = require('./keys');
var fs = require("fs");
var request = require("request");
var answer = process.argv[2];
var secondVar = process.argv[3];

 switch (answer) {

	case "my-tweets":
	twitter();
	break;
	
	case "spotify-this-song":
	spotify();	
	break;
	
	case "movie-this":
	movie();
	break;

	case "do-what-it-says":
	whatSays();
	break;


};

function twitter() {

   var Twitter = require('twitter');
	
   var client = new Twitter({
	consumer_key: 'Q93xFWoZRzsRGE0yxTzJkMeSd',
	consumer_secret: 'y1ThbPk59GyNqgjiK8rfLkWOAWIdwlcgg88fBga9NbRpX1dGBp',
	access_token_key: '308216102-05ys1yDByPVl2FJkHeXy4J1OPNrsapETvEIauWdf',
	access_token_secret: 'BLxzxuchc4dpgLjk4ltt8qtKMcnsvyIafarJ2GwQIsDFB',
   });
	
   var params = {screen_name: 'ramizkhan2'};
   client.get('statuses/user_timeline', params, function(error, tweets, response) {
	
	var runs = 20;

	for (i =0; i<runs; i++) {
	console.log(i+1 + ': ' + tweets[i].text);
	}

   });
}

function spotify() {
		
	var Spotify = require('node-spotify-api');
	
	var spotify = new Spotify({
		id: "740c48db93154a77984d2a218b049be6",
		secret: "a710dabd9e7d4efabf3320415a6ff5ab"
	});
		
	spotify.search({ type: 'track', query: 'the Sign' }, function(err, data) {
		if (err) {
		return console.log('Error occurred: ' + err);
		}
		
	console.log(data.tracks.href); 
	
		});
	};
function movie() {

	options = {  
		url: "http://www.omdbapi.com/?apikey=40e9cece&t="+secondVar,
		method: 'GET',
	};

	request(options, function(err, res, body) {  
		console.log(
			JSON.parse(body)
		);
	});

};

function whatSays() {
	var file = fs.writeFile("./random.txt");
	console.log(file);
}