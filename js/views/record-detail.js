define(["views/base", "models"],
    function (BaseView, Record) {
        "use strict";
        var DetailView = BaseView.extend({
            model: null,
            initialize: function () {
                var that = this;
                this.validate();
                this.model = new Record({ tableID: 4, recordID: 2});
                this.model.fetch({
                    success: function () {
                        _.extend(that.extras, that.model.toJSON());
                        that.render();
                    }
                });
            }
        });
        return DetailView;
    });