const http = require('http');

http.get('http://google.com', res => {
  console.log(res);
});

const mymodule = ()=>{
  //i will be exported.... 
};

module.exports.mymodule = mymodule; 

