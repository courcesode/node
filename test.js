const http = require('http');

http.get('http://google.com', res => {
  console.log(res);
});

