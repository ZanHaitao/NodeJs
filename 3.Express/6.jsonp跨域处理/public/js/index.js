// fetch('http://localhost:8888/api/student').then(res => res.json()).then(res => {
//     console.log(res);
// })

function jsonp(url) {
    const script = document.createElement('script');
    script.src = url;
    document.body.append(script);
    script.onload = () => {
        script.remove();
    }
}

function callback(data) {
    console.log(data);
}

jsonp('http://localhost:8888/api/student')