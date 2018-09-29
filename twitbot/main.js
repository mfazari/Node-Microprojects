const twit = require('twit');
const config = {
    consumer_key:         'N7KMv4kAyyUGx5kqzfLqAyJ5W',
    consumer_secret:      'Bt99VhJrInU5KDuQussAw8738Ztl7Ds0wfsR28q5MnsBZKcESV',
    access_token:         '1045652205448179713-e9aZNvNCWBdSh3ZTmRiJ7He9Hm3LH9',
    access_token_secret:  'Mm5ytWr1srVRNkrRL5fu1tzcuiuWMyok6rqqiQwxP7emd',
}

const Twitter = new twit(config);

let retweet = function() {
    let params = {
        q: '#developer, #jobs',
        result_type: 'mixed',
        lang: 'en'
    }
    Twitter.get('search/tweets', params, function(err, data) {
        console.log(data);
        // if there is no error
        if (!err) {
           // loop through the first 4 returned tweets
          for (let i = 0; i < 4; i++) {
            // iterate through those first four defining a rtId that is equal to the value of each of those tweets' ids
          let rtId = data.statuses[i].id_str;
            // the post action
          Twitter.post('statuses/retweet/:id', {
            // setting the id equal to the rtId variable
            id: rtId
            // log response and log error
          }, function(err, response) {
            if (response) {
              console.log('Successfully retweeted');
            }
            if (err) {
              console.log(err);
            }
          });
        }
      }
        else {
            // catch all log if the search could not be executed
          console.log('Could not search tweets.');
        }
    });
}
retweet();

setInterval(retweet, 600000);