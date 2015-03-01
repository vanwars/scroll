define(["underscore",
        "jquery",
        "backbone",
        "views/base"
    ],
    function (_, $, Backbone, BaseView) {
        "use strict";
        var App = function (opts) {
            this.routes = {};
            this.routeViews = {};
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
                    var View = BaseView.extend(page),
                        v = new View();
                    if (page.url) {
                        that.routeViews[page.url] = v;
                    } else {
                        $(page.target).html(v.el);
                    }
                });
            };

            this.buildRoutes = function (pages) {
                var that = this;
                /* Dynamically builds Backbone Routes from the config file */
                _.each(pages, function (page) {
                    that.routes[page.url] = function () {
                        $(".vcenter").html(that.routeViews[page.url].el);
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

