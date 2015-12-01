var ktl = require('ktl');

module.exports = {
    name: 'ktl',
    ext: 'ktl',
    render: function(template, data, callback) {
        callback(null, template(data));
    },
    compile: function(src, templatePath, templateName, callback) {
        var compiled = 'module.exports=' + ktl(src).toString();
        callback(null, compiled);
    },
    load: function(src, templatePath, templateName, callback) {
        callback(null, ktl(src));
    }
};