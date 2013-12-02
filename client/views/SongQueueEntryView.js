// SongQueueEntryView.js - Defines a backbone view class for the song queue entries.
window.MyTunes = window.MyTunes || {};
window.MyTunes.Views = window.MyTunes.Views || {};

MyTunes.Views.SongQueueEntryView = Backbone.View.extend({
  tagName: 'tr',

  template: _.template('<td>(<%= artist %>)</td><td><%= title %></td>'),

  events: {
    'click': function() {
      //this.model.play();
      this.model.dequeue();
    }
  },

  initialize: function() {
    this.model.on('change', this.render(), this);
  },

  render: function(){
    return this.$el.html(this.template(this.model.attributes));
  }

});
