# errorLoger

A simple module to log errors on filesystem

# Usage

## Install

    npm install error-logger
    
## Initialize

    var errLib = require("error-logger");
    var errorLog = new errLib(errorLogOptions);
    
## Options

    path*   : Path to save log files ,
    module* : Name of the module/ filename of error llog
    
## Example
    
    var errorLogOptions = {
        path : path.join(__dirname, 'error_logs'),
        module : moduleString
    };
    var errLib = require("error-logger");
    var errorLog = new errLib(errorLogOptions);
    
    errorLog("Type 114", new Error("Error in ____");
    
## Log Function
    
Takes two arguments
    
* Error Type (String)
* Error (Error)
        
    