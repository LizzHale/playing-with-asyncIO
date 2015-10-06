var events = require('events');

var progressBar = new events.EventEmitter();

progressBar.on('start', function() {
    console.log('Start');
    for (var i = 1; i <= 100; i++) {
        if (i % 10 === 0) {
            progressBar.emit('progress', i);
        }
        if (i === 100) {
            progressBar.emit('end');
        }
    }
});

progressBar.on('progress', function(current_progress) {
    console.log('Progress: ' + current_progress + '%');
});

progressBar.on('end', function() {
    console.log('Finished');
});

progressBar.emit('start');

