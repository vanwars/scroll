define(["backbone",
        "handlebars",
        "jquery"
    ],
    function (Backbone, Handlebars, $) {
        "use strict";
        var BaseView = Backbone.View.extend({
            initialize: function () {
                this.template = Handlebars.compile($(this.template_source).html());
                this.render();
            },
            render: function () {
                this.$el.html(this.template(this.extras));
            },
            validate: function () {
                if (this.template_source === 'undefined') {
                    throw new Error("template_source must be defined upon initialization");
                }
            }
        });
        return BaseView;
    });