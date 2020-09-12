const util = require('util');

// async function delay(time){
//     return new Promise(resolve=>{
//         setTimeout(() => {
//             resolve(time)
//         }, time);
//     })
// }

// const delayCallback = util.callbackify(delay);

// delayCallback(500,(err,time)=>{
//     console.log(time);
// })

function delayCallback(time,callback){
    setTimeout(() => {
        callback(null,time);
    }, time);
}

const delay = util.promisify(delayCallback);

delay(500).then(res => console.log(res));