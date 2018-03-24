const electron = require('electron');
const app = electron.app;
const path = require('path');
const url = require('url');
const config = require('config');

const BrowserWindow = electron.BrowserWindow;

var mainWindow;

var bgCol = config.get("App.BackgroundColor");

app.on('ready', function(){
  mainWindow = new BrowserWindow({
    width:1024,
    height:768,
    backgroundColor: bgCol
  });

  //opens a browser window
  // mainWindow.loadURL('https://www.youtube.com');

  //renders html page
  mainWindow.loadURL(url.format({
    pathname: path.join(__dirname, 'contents/html/test.html'),
    protocol: 'file:',
    slashes: true
  }));
  
});