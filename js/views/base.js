define(["underscore", "marionette", "views/viewMixin"],
    function (_, Marionette, ViewMixin) {
        "use strict";
        var BaseView = Marionette.View.extend({
            initialize: function () {
                //Note: validate and render are defined in the ViewMixin.
                this.validate();
                this.render();
            }
        });
        _.extend(BaseView.prototype, ViewMixin);
        return BaseView;
    });