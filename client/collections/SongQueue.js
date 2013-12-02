// SongQueue.js - Defines a backbone model class for the song queue.
window.MyTunes = window.MyTunes || {};
window.MyTunes.Collections = window.MyTunes.Collections || {};

MyTunes.Collections.SongQueue = MyTunes.Collections.Songs.extend({

  model: MyTunes.Models.SongModel,

  initialize: function(){
    this.on('add', this.checkFirst, this);
    this.on('ended', this.removeFirst, this);
    this.on('dequeue', this.removeFirst, this);
    this.on('enqueue', this.storage.push(this));
  },

  storage: [],

  checkFirst: function(song){
    if(!_.contains(this.storage,song)){
      this.storage.push(song);
    }
    if(this.length === 1){
      this.playFirst();
    }
  },

  playFirst: function(song) {
    this.at(0).play();
  },

  removeFirst: function(){
    this.remove(this.at(0));
    if(this.length){
      this.playFirst();
    }
  }

});
