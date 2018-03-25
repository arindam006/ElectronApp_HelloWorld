# ElectronApp_HelloWorld
# Fisrt Sample Electron App with Node.JS

1.1.	Initiating App

I.	Initiating & Installing Global Packages

Open CMD from the Application Root Folder.

C:\Users\arind>cd C:\TECH\Electron Apps\Apps\HelloWorld

Initiate npm.

C:\TECH\Electron Apps\Apps\HelloWorld>npm init

Install npm.

C:\TECH\Electron Apps\Apps\HelloWorld>npm install –-save --verbose

Install following packages globally.

C:\Users\arind>npm install -g electron
C:\Users\arind>npm install -g electron-packager
C:\Users\arind>npm install -g eslint
C:\Users\arind>npm install -g jshint 
C:\Users\arind>npm install -g config

II.	Installing Local Packages & Adding Dependencies

Install required electron & configuration modules locally.

C:\Users\arind>npm install electron -–save –verbose
C:\Users\arind>npm install electron-packager -–save --verbose 
C:\Users\arind>npm install config –-save --verbose

Install the following two for code quality enhancement and error detection in IDE (e.g. VS Code, Atom etc.).

C:\TECH\Electron Apps\Apps\HelloWorld>npm install eslint –-save-dev --verbose
C:\TECH\Electron Apps\Apps\HelloWorld>npm install jshint –-save-dev --verbose
