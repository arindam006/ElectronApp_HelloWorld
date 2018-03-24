alert('Hello!! Loop Starts!!');
var i = 0;
setInterval(()=>{
    console.log('iteration '+i);
    if(i===5)
        alert('Hello!! Loop ('+(i-1)+'))!!');
    i++;
}, 5);