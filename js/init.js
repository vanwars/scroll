define(["underscore",
        "jquery",
        "backbone",
        "views/base"
    ],
    function (_, $, Backbone, BaseView) {
        "use strict";
        var App = function (opts) {
            this.routes = {};
            this.views = {};
            this.appRouter = null;

            this.init = function (opts) {
                this.buildViews(opts.pages);
                this.buildRoutes(opts.pages);
                var AppRouter = Backbone.Router.extend({
                    routes: this.routes
                });
                this.appRouter = new AppRouter();
                Backbone.history.start();
            };

            this.buildViews = function (pages) {
                var that = this;
                /* Dynamically builds Backbone Views from the config file */
                _.each(pages, function (page) {
                    var View = BaseView.extend(page);
                    that.views[page.url] = new View();
                });
            };

            this.buildRoutes = function (pages) {
                var that = this;
                /* Dynamically builds Backbone Routes from the config file */
                _.each(pages, function (page) {
                    that.routes[page.url] = function () {
                        $(".vcenter").html(that.views[page.url].el);
                        that.addAnimation();
                    };
                });
            };

            this.addAnimation = function () {
                $(".learn_intro")
                    .animate({ 'width': '48em' })
                    .css({ 'background-color': 'rgba(53, 53, 53, 0.9)' });
            };

            //call init upon initialization:
            this.init(opts);
        };
        return App;
    });

