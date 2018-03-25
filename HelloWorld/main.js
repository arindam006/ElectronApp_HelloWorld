const electron = require('electron');
const app = electron.app;
const path = require('path');
const url = require('url');
const config = require('config');

const BrowserWindow = electron.BrowserWindow;

var mainWindow;

var BackgroundColor = config.get("App.Styling.Main.BackgroundColor");
var DefaultHeight = config.get("App.Styling.Main.DefaultHeight");
var DefaultWidth = config.get("App.Styling.Main.DefaultWidth");
var TestURLLoadAddress = config.get("App.TestURLLoadAddress");
var StartingPoint = config.get("App.StartingPoint");


app.on('ready', function(){
  mainWindow = new BrowserWindow({
    icon: path.join(__dirname, 'assets/icons/png/icon.png'),
    title: "My First Electron App",
    width: DefaultHeight,
    height: DefaultWidth,
    backgroundColor: BackgroundColor
  });

  //opens a browser window
  //mainWindow.loadURL(TestURLLoadAddress);

  //renders html page
  mainWindow.loadURL(url.format({
    pathname: path.join(__dirname, StartingPoint),
    protocol: 'file:',
    slashes: true
  }));
  
});