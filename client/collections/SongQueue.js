// SongQueue.js - Defines a backbone model class for the song queue.
window.MyTunes = window.MyTunes || {};
window.MyTunes.Collections = window.MyTunes.Collections || {};

MyTunes.Collections.SongQueue = MyTunes.Collections.Songs.extend({

  model: MyTunes.Models.SongModel,

  initialize: function(){
    this.on('add', this._enqueue, this);
    this.on('ended', this._playNext, this);
    this.on('dequeue', this._dequeue, this);
  },

  _enqueue: function(song){
    if(this.length === 1){
      this.playFirst();
    }
  },

  _dequeue: function(song){
      this.remove(song);
    },

  playFirst: function() {
    this.at(0).play();
  },

  _playNext: function(){
    this.shift();
    if(this.length > 0){
      this.playFirst();
    }
  }

});
