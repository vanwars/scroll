define(["backbone"],
    function (Backbone) {
        "use strict";
        var BaseView = Backbone.View.extend({
            initialize: function () {
                this.validate();
                this.render();
            },
            render: function () {
                var that = this;
                if (!this.template) {
                    require(
                        ["handlebars", "text!../../templates/" + this.template_path],
                        function (Handlebars, Path) {
                            //console.log("Template is loading asynchronously");
                            that.template = Handlebars.compile(Path);
                            that.$el.html(that.template(that.extras));
                        }
                    );
                } else {
                    //console.log("Template loading from memory");
                    this.$el.html(this.template(this.extras));
                }
            },
            validate: function () {
                if (this.template === 'undefined') {
                    throw new Error("template_source must be defined upon initialization");
                }
            }
        });
        return BaseView;
    });