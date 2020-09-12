const URL = require('url');

const url = new URL.URL('https://jingyan.baidu.com/article/47a29f240be82a811523994a.html');

console.log(url);

// {
//     href: 'https://jingyan.baidu.com/article/47a29f240be82a811523994a.html',
//     origin: 'https://jingyan.baidu.com',
//     protocol: 'https:',
//     username: '',
//     password: '',
//     host: 'jingyan.baidu.com',
//     hostname: 'jingyan.baidu.com',
//     port: '',
//     pathname: '/article/47a29f240be82a811523994a.html',
//     search: '',
//     searchParams: URLSearchParams {},
//     hash: ''
// }