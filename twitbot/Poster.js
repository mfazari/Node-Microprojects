/* Configure the Twitter API */
    var TWITTER_CONSUMER_KEY = 'N7KMv4kAyyUGx5kqzfLqAyJ5W';
    var TWITTER_CONSUMER_SECRET = 'Bt99VhJrInU5KDuQussAw8738Ztl7Ds0wfsR28q5MnsBZKcESV';
    var TWITTER_ACCESS_TOKEN = '1045652205448179713-e9aZNvNCWBdSh3ZTmRiJ7He9Hm3LH9';
    var TWITTER_ACCESS_TOKEN_SECRET = 'Mm5ytWr1srVRNkrRL5fu1tzcuiuWMyok6rqqiQwxP7emd';


var Twit = require('twit');

var Bot = new Twit({
    consumer_key: TWITTER_CONSUMER_KEY,
    consumer_secret: TWITTER_CONSUMER_SECRET,
    access_token: TWITTER_ACCESS_TOKEN, 
    access_token_secret: TWITTER_ACCESS_TOKEN_SECRET
});

console.log('The bot is running...');




//Post "Hello World"
Bot.post('statuses/update', { status: 'hello world!' }, function(err, data, response) {
  console.log("Done")
})