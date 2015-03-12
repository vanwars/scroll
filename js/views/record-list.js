define(["underscore",
        "marionette",
        "collection",
        "views/view-mixin",
        "views/record-detail"
    ],
    function (_, Marionette, Collection, ViewMixin, RecordView) {
        'use strict';
        /**
         * Controls a dictionary of overlayGroups
         * @class OverlayManager
         */
        //Todo: can this be a Marionette CollectionManager, since it's managing Layer models?
        var RecordList = Marionette.CompositeView.extend({

            events: {
                'click .page': 'newPage'
            },

            childViewContainer: '.data-container',

            initialize: function (opts) {
                this.collection = new Collection({ table_id: opts.table_id });
                this.listenTo(this.collection, 'reset', this.renderWithHelpers);
                this.loadTemplates(opts);
            },

            loadTemplates: function (opts) {
                var that = this;
                require([
                    "handlebars",
                    "text!../templates/" + opts.collection_template_path,
                    "text!../templates/" + opts.item_template_path],

                    function (Handlebars, CollectionTemplatePath, ItemTemplatePath) {
                        that.childView = Marionette.ItemView.extend({
                            template: Handlebars.compile(ItemTemplatePath)
                        });
                        that.template = Handlebars.compile(CollectionTemplatePath);
                        that.collection.fetch({reset: true});
                    });
            },

            renderWithHelpers: function () {
                this.templateHelpers = {
                    next: this.collection.next,
                    previous: this.collection.previous,
                    count: this.collection.count
                };
                this.render();
            },

            newPage: function (e) {
                alert("next page");
                e.preventDefault();
            }

        });

        return RecordList;
    });