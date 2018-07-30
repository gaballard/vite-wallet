let eventList = [];

let eventEmitter = {
    on: function(name, cb) {
        let event = {
            name,
            cb
        };
        eventList.push(event);
        return event;
    },
    emit: function(name, data) {
        eventList.forEach((event) => {
            event.name === name && event.cb && event.cb(data);
        });
    },
    off: function(event) {
        if (!event) {
            return;
        }

        let i;
        for (i = 0; i<eventList.length; i++) {
            if (event === eventList[i]) {
                break;
            }
        }

        if (i === eventList.length) {
            return;
        }

        eventList = eventList.splice(i, 1);
    }
};

export default eventEmitter;