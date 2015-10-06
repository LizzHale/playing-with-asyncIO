console.log('Console log before calling setTimeout:', new Date());

var seconds = 3;
setTimeout(function() {
    console.log('Console log inside callbackFunction:', new Date());
}, seconds * 1000);


console.log('Console log after calling setTimeout:', new Date());