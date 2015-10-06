function wait(seconds, callback) {
    setTimeout(function() {
        callback(new Date());
    }, seconds * 1000);
}

console.log('Console log before calling setTimeout:', new Date());

wait(3, function() {
    console.log('Console log inside callbackFunction:', new Date());
});


console.log('Console log after calling setTimeout:', new Date());