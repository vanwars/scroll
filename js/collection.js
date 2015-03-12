define(["backbone"],
    function (Backbone) {
        "use strict";
        /**
         * An "abstract" Backbone Collection; the root of all of the other
         * localground.collections.* classes. Has some helper methods that help
         * Backbone.Collection objects more easily interat with the Local Ground
         * Data API.
         * @class localground.collections.Base
         */
        var Base = Backbone.Collection.extend({
            key: null,
            next: null,
            previous: null,
            count: 0,
            defaults: {
                isVisible: true
            },
            initialize: function (opts) {
                this.url = 'http://localhost:7777/api/0/forms/' + opts.table_id + '/data/';
            },
            parse: function (response) {
                this.count = response.count;
                this.next = response.next;
                this.previous = response.previous;
                console.log(this.next, this.previous, this.count);
                return response.results;
            }

        });

        return Base;
    });
