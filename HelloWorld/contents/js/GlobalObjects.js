const config = require('config');

// var p11HTML = config.get("Keys.testKey");

var timerFrequencyInSec = 5;
var settimeout_invokeTime = null;
var setinterval_invokeTime = null;

var resetAllLabels = function () {
    $("#lbl11").html("");
    $("#lbl12").html("");
    $("#lbl13").html("");
    $("#lbl14").html("");
    $("#lbl21").html("");
    $("#lbl22").html("");
};

var showFileName = function () {
    $("#lbl11").html(__filename);
    console.log('__filename : ' + __filename);
};

var showDirName = function () {
    $("#lbl12").html(__dirname);
    console.log('__dirname : ' + __dirname);
};

var printHelloWorldFromSetTimeOut = function () {
    var msg = 'Timer invoked at ' + new Date();
    $("#lbl13").html(msg);
    console.log(msg);
};
var printHelloWorld_setTimeout = function () {
    var msg = 'Timer initiated at ' + new Date();
    settimeout_invokeTime = setTimeout(printHelloWorldFromSetTimeOut, timerFrequencyInSec * 1000);
    $("#lbl13").html(msg);
    console.log(msg);
};
var printHelloWorld_clearTimeout = function () {
    var msg = 'Timer cleared at ' + new Date();
    clearTimeout(settimeout_invokeTime);
    $("#lbl13").html(msg);
};

var printHelloWorldFromSetInterval = function () {
    var msg = 'Interval invoked at ' + new Date();
    $("#lbl14").html(msg);
    console.log(msg);
};
var printHelloWorld_setInterval = function () {
    var msg = 'Interval initiated at ' + new Date();
    setinterval_invokeTime = setInterval(printHelloWorldFromSetInterval, timerFrequencyInSec * 1000);
    $("#lbl14").html(msg);
    console.log(msg);
};
var printHelloWorld_clearInterval = function () {
    var msg = 'Interval cleared at ' + new Date();
    clearInterval(setinterval_invokeTime);
    $("#lbl14").html(msg);
};

var initiateProcessEventOnExit = function(){
    process.on('exit', function (code) {
        var msg = 'About to exit with code:' + code;
        alert(msg);
        console.log(msg);
    });
    $("#lbl21").html('Initiated');
};
var exit = function(){
    process.exit();
};

var getArchitectureAndPlatform = function () {
    var msg = 'Current Processor Architecture - ' + process.arch + ', Current Platform - ' + process.platform;
    $("#lbl22").html(msg);
};

