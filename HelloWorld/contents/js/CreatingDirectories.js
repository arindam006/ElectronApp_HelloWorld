const config = require('config');

// var p11HTML = config.get("Keys.testKey");

var resetAllLabels = function () {
    $("#lbl11").html("");
    $("#txt11").val("");
    $("#lbl12").html("");
    $("#txt12").val("");
    $("#lbl21").html("");
    $("#txt21").val("");
    $("#lbl22").html("");
    $("#txt22").val("");
};

var createDirectiryInAppData = function () {
    var textboxVal = $("#txt11").val();
    $("#lbl11").html(textboxVal);
};

var deleteDirectoryInAppData = function () {
    var textboxVal = $("#txt12").val();
    $("#lbl12").html(textboxVal);
};

var createDirectoryAnywhere = function () {
    var textboxVal = $("#txt21").val();
    $("#lbl21").html(textboxVal);
};

var deleteDirectoryAnywhere = function () {
    var textboxVal = $("#txt22").val();
    $("#lbl22").html(textboxVal);
};