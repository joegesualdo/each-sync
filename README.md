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

## API

### `eachSync(startingIndex, array, fn(i, callback), callback)`

| Name | Type | Description |
|------|------|-------------|
| startingIndex | `Number` | Represents the array index where you want to start the iteration
| array | `Array` | The array you want to iterate through
| fn | `Function` | the function you want to perform upon each iteration 

## License
MIT © Joe Gesualdo
