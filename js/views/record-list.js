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
        var RecordList = Marionette.CollectionView.extend({
            //itemViewContainer: '.results',
            initialize: function (opts) {
                //var that = this;
                this.collection = new Collection({ table_id: opts.table_id });
                this.listenTo(this.collection, 'reset', this.render);
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
            appendHtml: function (collectionView, itemView) {
                console.log("appendHtml");
                collectionView.$(".results").append(itemView.el);
            }
        });
        //_.extend(RecordList.prototype, ViewMixin);
        return RecordList;
    });