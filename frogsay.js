'use strict';
var main = function() {
    var i;
    var frog = ['',
    "         _,-.  ",
    " ,-. ,--'  o ) ",
    " \\(,' '  ,,-' ",
    ",-.\\-.__,\\\\_",
    "\\(`--'    `\\ ",
    ''];

    // Gets args as a string
    var args = Array.prototype.slice.call(arguments);
    var stringOfArgs = args.join(' ');

    // Add the bubble if there is something to log!
    if( stringOfArgs.length > 0 ) {  
        frog[1] = frog[1] + "   ---" + ("-".repeat(stringOfArgs.length)) + "-";
        frog[2] = frog[2] + "-(   " + stringOfArgs + "   )";
        frog[3] = frog[3] + "    ---" + ("-".repeat(stringOfArgs.length)) + "-";
    }
    for( i = 0; i < frog.length; i++ ) {
        console.log(frog[i]);
    }
}

var theargs = process.argv[2]

main(theargs);