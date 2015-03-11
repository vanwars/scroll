define(["underscore", "marionette", "views/viewMixin", "models"],
    function (_, Marionette, ViewMixin, Model) {
        "use strict";
        var RecordView = Marionette.ItemView.extend({
            model: null,
            modelEvents: {
                'change': 'render'
            },
            initialize: function (opts) {
                var that = this;
                this.validate();
                this.model = new Model({ tableID: opts.tableID, recordID: opts.recordID});
                this.model.fetch({
                    success: function () {
                        _.extend(that.extras, that.model.toJSON());
                        that.render();
                    }
                });
            }
        });
        _.extend(RecordView.prototype, ViewMixin);
        return RecordView;
    });