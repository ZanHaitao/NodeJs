const MyHttp = require('./MyHttp');

const request = new MyHttp('http://duyi.edu.ke.qq.com',{
    method:'GET'
});

request.send();

request.on('res',(headers,body)=>{
    console.log(headers);
    console.log(body);
})