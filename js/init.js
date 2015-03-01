define(["underscore",
        "jquery",
        "backbone",
        "views/base"
    ],
    function (_, $, Backbone, BaseView) {
        "use strict";
        var App = function (opts) {
            this.routes = {};
            this.appRouter = null;

            this.init = function (opts) {
                this.compileTemplates(opts.pages);
                this.loadRoutes(opts.pages);
                var AppRouter = Backbone.Router.extend({
                    routes: this.routes
                });
                this.appRouter = new AppRouter();
                Backbone.history.start();
            };

            this.compileTemplates = function (pages) {
                _.each(pages, function (page) {
                    require(
                        ["handlebars", "text!../../templates/" + page.template_path],
                        function (Handlebars, Path) {
                            //console.log("test");
                            page.template = Handlebars.compile(Path);
                            console.log(page);
                        }
                    );
                    //console.log(n);
                });
            };

            this.loadRoutes = function (pages) {
                var that = this;
                /* Dynamically builds Backbone Views and Routes from the config file */
                _.each(pages, function (page) {
                    that.routes[page.url] = function () {
                        var View = BaseView.extend(page),
                            v = new View();
                        $(".vcenter").html(v.el);
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

