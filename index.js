/** * Created by Sundeep on 6/9/2015. */var fs      = require('fs');var path    = require('path');var util    = require('util');var errorLogger = function(options){    if(typeof (options.path) !== "string") {        options.path = '.';    }    this.path = options.path || '.';    if(typeof (options.module) !== "string") {        options.module = 'NoName';    }    this.module = options.module || 'NoName';};errorLogger.prototype.log = function(type,errObject){    if ((typeof (errObject) == "object") &&(errObject instanceof Error)) {        var stack = JSON.stringify(errObject.stack);        var message = errObject.message    } else {        var err = new Error("Follwing err object passed : "+errObject);        stack = JSON.stringify(err.stack);        message = err.message;    }    var fileMessage = "Date : [" + new Date() + "]\n\n"        + "Type : [" + type + "]\n\n"        + "Message : [" + message + "]\n\n"        + "Stack : [" + stack + "]\n\n";    if(arguments.length > 2){        var argsArray = Array.prototype.slice.call(arguments);        argsArray.shift();        argsArray.shift();        argsArray.shift();        argsArray.forEach(function(d,i){            if(typeof (d)=="object") d = JSON.stringify(d);            fileMessage = fileMessage + 'Extra Argument(' + i + ') : [' + d + ']\n\n';        }) ;    }    fileMessage = fileMessage + "\n-***-\n\n";    fs.appendFile(path.join(this.path,this.module+".log"),fileMessage,function(err){        if(err) console.error("Error Logging to file failed : \n" + util.inspect(err));    });};module.exports = errorLogger;