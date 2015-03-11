define(["marionette",
        "views/record-detail"
    ],
    function (Marionette, RecordView) {
        'use strict';
        /**
         * Controls a dictionary of overlayGroups
         * @class OverlayManager
         */
        //Todo: can this be a Marionette CollectionManager, since it's managing Layer models?
        var RecordList = Marionette.CollectionView.extend({
            /**
             * @lends localground.maps.views.LayerManager#
             */
            childView: RecordView,

            initialize: function (opts) {
                this.collection = opts.collection;
                this.opts = opts;
                this.childView = RecordView;
                this.childViewOptions = opts;
                this.validate();
                this.render();
            },

            applyEventHandlerBugfix: function () {
                this.listenTo(this.collection, 'reset', this.render);
            }
        });
        return RecordList;
    });