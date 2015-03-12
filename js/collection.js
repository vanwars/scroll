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
            defaults: {
                isVisible: true
            },
            initialize: function (opts) {
                this.url = 'http://localhost:7777/api/0/forms/' + opts.table_id + '/data/';
            },
            parse: function (response) {
                console.log(response);
                return response.results;
            }

        });

        return Base;
    });
