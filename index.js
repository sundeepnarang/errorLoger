/** * Created by Sundeep on 6/9/2015. */var fs      = require('fs');var path    = require('path');var util    = require('util');var errorLogger = function(options){    if(typeof (options.path) !== "string") {        options.path = '.';    }    this.path = options.path || '.';    if(typeof (options.module) !== "string") {        options.module = 'NoNameSet';    }    this.module = options.module || 'NoNameSet';};errorLogger.prototype.log = function(type,message,stack){    if (typeof (stack) == "object") {        stack = JSON.stringify(stack);    }    var fileMessage = "Date : [" + new Date() + "]\n\n"        + "Type : [" + type + "]\n\n"        + "Message : [" + message + "]\n\n"        + "Stack : [" + stack + "]\n\n";    if(arguments.length >3){        var argsArray = Array.slice(arguments);        argsArray.forEach(function(d,i){            if(typeof (d)=="object") d = JSON.stringify(d);            fileMessage = fileMessage + 'Extra Argument(' + i + ') : [' + d + ']\n\n';        }) ;    }    fileMessage = fileMessage + "\n-***-\n\n";    fs.appendFile(path.join(this.path,this.module),fileMessage,function(err){       console.error("Error Logging to file failed : \n" + util.inspect(err))    });};