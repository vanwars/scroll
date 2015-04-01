define(["underscore", "marionette", "views/view-mixin", "model"],
    function (_, Marionette, ViewMixin, Model) {
        "use strict";
        var RecordView = Marionette.ItemView.extend({
            model: null,
            modelEvents: {
                'change': 'render'
            },
            onBeforeRender: function () {
                //console.log("onBeforeRender", this.model);
                _.extend(this.extras, this.model.toJSON());
            },
            initialize: function (opts) {
                console.log("record-detail");
                _.extend(this, opts);
                var that = this;
                this.validate();
                //this.model = new Model({ tableID: opts.tableID, recordID: opts.recordID});
                this.model.fetch({
                    success: function () {
                        _.extend(that.extras, that.model.toJSON());
                        that.render();
                    }
                });
                this.render();
            }
        });
        //_.extend(RecordView.prototype, ViewMixin);
        return RecordView;
    });