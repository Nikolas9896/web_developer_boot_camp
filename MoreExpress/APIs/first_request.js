var request = require("request");

request('http://www.google.com', function(error, response, body){
    if(!error && response.statusCode == 200){
        console.log(body)//show the HTML for the Google homepage.
    } else {
        console.log(error);
    }
});