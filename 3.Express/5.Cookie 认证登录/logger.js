const log4js = require('log4js');
const path = require('path');

log4js.configure({
    appenders: {
        sql: {
            type: 'datefile',
            filename: path.resolve(__dirname, 'logs', 'sql', 'logging.log'),
            maxLogSize: 1024 * 1024,
            layout: {
                type: 'pattern',
                pattern: '%c [%d{yyyy-MM-dd hh:mm:ss}] [%p] : %m %n'
            },
            keepFileExt:true
        },
        default: {
            type: 'stdout'
        }
    },
    categories: {
        sql: {
            appenders: ['sql'],
            level:'all'
        },
        default:{
            appenders:['default'],
            level:'all'
        }
    }
})

const sqlLogger = log4js.getLogger('sql');
const logger = log4js.getLogger();

process.on('exit',()=>{
    log4js.shutdown();
})

exports.sqlLogger = sqlLogger;
exports.logger = logger;