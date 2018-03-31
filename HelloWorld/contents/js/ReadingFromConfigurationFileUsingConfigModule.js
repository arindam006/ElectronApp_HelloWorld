const config = require('config');

var p11HTML = config.get("Keys.testKey");

$(document).ready(function () {
    // alert('ready', 'Alert Window');
    $("#p11").html(p11HTML);
});