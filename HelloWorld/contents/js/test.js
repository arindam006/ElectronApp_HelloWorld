const config = require('config');

var msg = config.get("Messages.MSG001");

alert(msg, "Alert Window");

var i = 0;
setInterval(()=>{
    console.log('iteration '+i);
    if(i===5)
        alert(msg + (i - 1), 'Alert Window');
    i++; 
}, 5);