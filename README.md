## eachSync
> Synchronous iteration

## Install
```
$ npm install --save each-sync
```

## Usage
```javascript
var eachSync = require("each-sync")

queries= ["dogs", "cats", "birds"]

eachSync(0, queries, function(i, callback){
  request('http://www.google.com?q='+queries[i], function (error, response, body) {
    if (!error && response.statusCode == 200) {
      console.log("Got page for query: " + queries[i])
      console.log(body) // Show the HTML for the Google query.
      callback()
    }
  })
}, function(err, status){
  console.log(status)
})
```

