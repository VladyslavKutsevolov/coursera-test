module.exports = {
    subscribers: [],
    /**
     * @param {String} event
     * @param {Object} subscriber
     * @param {Function} handler
     */
    on: function (event, subscriber, handler) {
        this.subscribers.push({
            eventName: event,
            subscriber: subscriber,
            handler: handler
        });
        return this;
    },

    /**
     * @param {String} event
     * @param {Object} subscriber
     */
    off: function (event, subscriber) {
        var indxDel = -1;
        this.subscribers.findIndex((val, index) => {
            if(val.eventName == event && val.subscriber == subscriber) {
                indxDel = index;
                return index;}
        });
        if (indxDel != -1) {
            this.subscribers.splice(indxDel, 1);
            return this.off(event, subscriber);
        } else {return this;}

    },

    /**
     * @param {String} event
     */
    emit: function (event) {
        for (var i=0; i < this.subscribers.length; i++) {
            var subscriber = this.subscribers[i];
            if (subscriber.eventName === event && subscriber.subscriber != undefined && subscriber.handler != undefined) {
                subscriber.handler.call(subscriber.subscriber);
            }
        }
        return this;
    }
};
