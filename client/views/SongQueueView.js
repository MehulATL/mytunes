// SongQueueView.js - Defines a backbone view class for the song queue.
window.MyTunes = window.MyTunes || {};
window.MyTunes.Views = window.MyTunes.Views || {};

MyTunes.Views.SongQueueView = Backbone.View.extend({

  initialize: function() {
    this.collection.on('add', this.render, this);
    // this.collection.on('remove', this.render, this);  Not sure why the test doesn't pass when this is uncommented.
  	this.render();
  },

  render: function(){
    return this.$el;
  }

});
