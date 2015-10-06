function wait(seconds, callback) {
    setTimeout(function() {
        callback(new Date());
    }, seconds * 1000);
}

console.log('Console log before calling setTimeout:', new Date());

wait(3, function(date) {
    console.log('Console log inside callbackFunction:', date);
});


console.log('Console log after calling setTimeout:', new Date());