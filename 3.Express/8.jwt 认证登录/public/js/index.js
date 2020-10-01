fetch('http://localhost:8888/api/student').then(res => res.json()).then(res => {
    console.log(res);
})

// fetch('http://localhost:8888/api/student',{
//     method:'POST',
//     headers:{
//         'content-type':'application/json',
//         a:1
//     },
//     credentials:'include'
// }).then(res => res.json()).then(res => {
//     console.log(res);
// })