var ProgressBar = function() {
    this.listeners = {};
};

ProgressBar.prototype.on = function(eventName, listener) {
    if (!this.listeners.hasOwnProperty(eventName)) {
        this.listeners[eventName] = [listener];
    }
    else {
        this.listeners[eventName].push(listener);
    }
};

ProgressBar.prototype.emit = function(eventName) {
    if (!this.listeners.hasOwnProperty(eventName)) {
        return;
    }

    var args = [];
    for (var i = 1; i < arguments.length; i++) {
        args.push(arguments[i]);
    }

    this.listeners[eventName].forEach(function(listener) {
        listener.apply(null, args);
    });
};

var progressBar = new ProgressBar();

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

