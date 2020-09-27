const moment = require('moment');
const validate = require('validate.js');
const ClassServ = require('./ClassService');

/**
 * 自定义规则
 * @param {*} value 检验源数据
 */
validate.validators.classExits = async function(value){
    const result = await ClassServ.getClassById(value);
    if(result){
        return;
    }
    return "is not exits";
}

validate.extend(validate.validators.datetime, {
    /**
     * 该函数会自动用于日期格式转换
     * 它会在验证时自动触发，它需要将任何数据转为时间戳返回
     * 如果无法转换则返回NaN
     * @param {*} value 传入要转换的值
     * @param {*} options 针对某个属性的验证配置
     */
    parse: function (value, options) {
        let format = [
            'YYYY-MM-DD HH:mm:ss',
            'YYYY-M-D H:m:s',
            'YYYY/MM/DD HH:mm:ss',
            'YYYY/M/D H:m:s'
        ];
        if (options.dateOnly) {
            format = [
                'YYYY-MM-DD',
                'YYYY-M-D',
                'YYYY/MM/DD',
                'YYYY/M/D'
            ]
        }
        return +moment.utc(value,format,true);
    },

    /**
     * 用户显示错误信息时使用的字符串
     * @param {*} value 传入要转换的值
     * @param {*} options 针对某个属性的验证配置
     */
    format: function (value, options) {
        let format = 'YYYY-MM-DD';
        if(!options.dateOnly){
            format+= ' HH:mm:ss';
        }
        return moment.utc(value).format(format);
    }
})