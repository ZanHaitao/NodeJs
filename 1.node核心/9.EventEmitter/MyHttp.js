const {
    EventEmitter
} = require('events');
const http = require('http');

module.exports = class extends EventEmitter {
    constructor(url, options) {
        super();
        this.url = url;
        this.options = options;
    }

    send(content = '') {
        let body = '';
        const request = http.request(this.url, {
            ...this.options
        }, resp => {
            resp.on('data', chunk => {
                body += chunk.toString('utf-8');
            });
            resp.on('end', () => {
                this.emit('res', resp.headers, body);
            })
        });
        request.write(content);
        request.end();
    }
}