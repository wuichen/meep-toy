import React from 'react';
import 'normalize.css/normalize.css!';
import css from '../meeptv-style';
import {merge as m} from 'meepworks/styles';
import '../assets/preset.css!';
import StoreBase from 'meepworks/store-base';
import ActionBase from 'meepworks/action-base';
import Im from 'immutable';
const DATA = Symbol();

class ChangeVideoAction extends ActionBase {
  action(video) {
    return Promise.resolve(video);
  }
};

class PlayAction extends ActionBase {
  action(){
   return Promise.resolve();
  }
}

class PauseAction extends ActionBase {
  action(){
    return Promise.resolve();
  }
}

class VolumeChangeAction extends ActionBase{
  action(volume){
    return Promise.resolve(volume);
  }
}

class SetupPlayerAction extends ActionBase {
  action() {
    return new Promise((resolve, reject) => {
      if(document.querySelector('script#youtube_api')) {
        this.setState({
          player: new YT.Player('video', {})
        });
      } else {
        var tag = document.createElement('script');
        tag.id = 'youtube_api';
      // tag.src = "http://www.youtube.com/player_api";
        tag.src = "https://www.youtube.com/iframe_api";
        var firstScriptTag = document.getElementsByTagName('script')[0];
        firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

        window.onYouTubePlayerAPIReady = () => {
          var newPlayer = new YT.Player('video',{
            events:{
              'onStateChange': function(event){
                if(event.data == 2){
                  new PauseAction().exec();
                }else if(event.data == 1){
                  new PlayAction().exec();
                }
              }
            }
          })
          resolve(newPlayer);
        };
      }
    });    
  }
  
}


export class PlayerStore extends StoreBase {
  constructor(){
    this[DATA] = {
      player: null,
      isPlaying: false,
      _currentVideo:   {
       "kind": "youtube#searchResult",
       "etag": "\"9iWEWaGPvvCMMVNTPHF9GiusHJA/tfBfZvfvsggFrRXEjOfJRNLvxVI\"",
       "id": {
        "kind": "youtube#video",
        "videoId": "6fF5KkbY0b8"
       },
       "snippet": {
        "publishedAt": "2015-03-24T23:27:02.000Z",
        "channelId": "UCQIUhhcmXsu6cN6n3y9-Pww",
        "title": "NBA 2K15 My Team | RTTP | Lobs For Days! #13",
        "description": "NBA 2K15 My team Mode is here, NBA 2K15 my team has road to the playoffs domination and packs you can open. This year i will be doing the NBA 2K15 my ...",
        "thumbnails": {
         "default": {
          "url": "https://i.ytimg.com/vi/6fF5KkbY0b8/default.jpg"
         },
         "medium": {
          "url": "https://i.ytimg.com/vi/6fF5KkbY0b8/mqdefault.jpg"
         },
         "high": {
          "url": "https://i.ytimg.com/vi/6fF5KkbY0b8/hqdefault.jpg"
         }
        },
        "channelTitle": "JesserPlays",
        "liveBroadcastContent": "none"
       }
      },
      relatedVideos: {
         "kind": "youtube#searchListResponse",
         "etag": "\"9iWEWaGPvvCMMVNTPHF9GiusHJA/u-TY1fotX9pKMgDn9PsZKWq_HaM\"",
         "nextPageToken": "CAoQAA",
         "pageInfo": {
          "totalResults": 1000000,
          "resultsPerPage": 10
         },
         "items": [
          {
           "kind": "youtube#searchResult",
           "etag": "\"9iWEWaGPvvCMMVNTPHF9GiusHJA/i8kFJksaiFXiEFbrKLfAQLdcnG0\"",
           "id": {
            "kind": "youtube#video",
            "videoId": "K-FqUIUDi9Q"
           },
           "snippet": {
            "publishedAt": "2015-03-24T23:23:14.000Z",
            "channelId": "UC5exkb32GJNDjGRtRZqSdJQ",
            "title": "NBA 2K15 My Team Gameplay - HE NEVER MISSES! | NBA 2K15 My Team  PS4",
            "description": "NBA 2K15 MyTeam Gameplay by @iMAV3RIQ Subscribe For More NBA 2K15 → http://goo.gl/3UPslm NBA 2K15 MyTeam Playlist - http://goo.gl/bZI1vC ...",
            "thumbnails": {
             "default": {
              "url": "https://i.ytimg.com/vi/K-FqUIUDi9Q/default.jpg"
             },
             "medium": {
              "url": "https://i.ytimg.com/vi/K-FqUIUDi9Q/mqdefault.jpg"
             },
             "high": {
              "url": "https://i.ytimg.com/vi/K-FqUIUDi9Q/hqdefault.jpg"
             }
            },
            "channelTitle": "iMAV3RIQ",
            "liveBroadcastContent": "none"
           }
          },
          {
           "kind": "youtube#searchResult",
           "etag": "\"9iWEWaGPvvCMMVNTPHF9GiusHJA/CxeHvEwmxSHAUffTQ2DjvfU_lfI\"",
           "id": {
            "kind": "youtube#video",
            "videoId": "kTK4NBxkM7Q"
           },
           "snippet": {
            "publishedAt": "2015-03-24T03:34:49.000Z",
            "channelId": "UCIn6QsbTWzazlt6LKDI3Q_w",
            "title": "Zach LaVine Clutch 3-Pointers | Timberwolves vs Jazz | March 23, 2015 | NBA 2014-15 Season",
            "description": "Minnesota Timberwolves vs Utah Jazz March 23 2015 Full Game Highlights HD NBAshowtimeHD LeBron James Harden Fight Foul Flagrant Patrick Beverley ...",
            "thumbnails": {
             "default": {
              "url": "https://i.ytimg.com/vi/kTK4NBxkM7Q/default.jpg"
             },
             "medium": {
              "url": "https://i.ytimg.com/vi/kTK4NBxkM7Q/mqdefault.jpg"
             },
             "high": {
              "url": "https://i.ytimg.com/vi/kTK4NBxkM7Q/hqdefault.jpg"
             }
            },
            "channelTitle": "",
            "liveBroadcastContent": "none"
           }
          },
          {
           "kind": "youtube#searchResult",
           "etag": "\"9iWEWaGPvvCMMVNTPHF9GiusHJA/0bUPHYJhoxSS63qrb-uMC3v4Dds\"",
           "id": {
            "kind": "youtube#video",
            "videoId": "Nu6STShgFQk"
           },
           "snippet": {
            "publishedAt": "2015-03-23T20:30:01.000Z",
            "channelId": "UCpbBgJeYxfl834tlz7O9_mg",
            "title": "NBA 2K15 MEGA MyCAREER - There's Always A New King!! MEGATRON JOINS THE...",
            "description": "NBA 2K15 MEGA My Career Andre Megatron Johnson There's Always A New King MEGATRON JOINS THE... Join The Family And Subscribe To My Channel, ...",
            "thumbnails": {
             "default": {
              "url": "https://i.ytimg.com/vi/Nu6STShgFQk/default.jpg"
             },
             "medium": {
              "url": "https://i.ytimg.com/vi/Nu6STShgFQk/mqdefault.jpg"
             },
             "high": {
              "url": "https://i.ytimg.com/vi/Nu6STShgFQk/hqdefault.jpg"
             }
            },
            "channelTitle": "HomelessGun",
            "liveBroadcastContent": "none"
           }
          },
          {
           "kind": "youtube#searchResult",
           "etag": "\"9iWEWaGPvvCMMVNTPHF9GiusHJA/8-ObLP96d8-XtOk3-VXLZyT1_P8\"",
           "id": {
            "kind": "youtube#video",
            "videoId": "0AdXAXMuWWg"
           },
           "snippet": {
            "publishedAt": "2015-03-23T20:00:00.000Z",
            "channelId": "UCcYbdnZYzNEZvffqx-Pwl2Q",
            "title": "NBA 2K15 MyCAREER Playoffs - S2 CFG4 | LeBron Flagrant Fouls Cam AGAIN ! CRAZY 4th Quarter Comeback",
            "description": "CLICK HERE TO BUY SOME OFFICIAL #SwagTeam #ZombieGANG GEAR !! http://theswagbag.spreadshirt.com/ NBA 2K15 MyCAREER Playoffs - S2 CFG4 ...",
            "thumbnails": {
             "default": {
              "url": "https://i.ytimg.com/vi/0AdXAXMuWWg/default.jpg"
             },
             "medium": {
              "url": "https://i.ytimg.com/vi/0AdXAXMuWWg/mqdefault.jpg"
             },
             "high": {
              "url": "https://i.ytimg.com/vi/0AdXAXMuWWg/hqdefault.jpg"
             }
            },
            "channelTitle": "StaxMontana",
            "liveBroadcastContent": "none"
           }
          },
          {
           "kind": "youtube#searchResult",
           "etag": "\"9iWEWaGPvvCMMVNTPHF9GiusHJA/G1OecQCsr9fDk4u-YGGLYqnSBRY\"",
           "id": {
            "kind": "youtube#video",
            "videoId": "FXLMMoWwT8Y"
           },
           "snippet": {
            "publishedAt": "2015-03-23T20:12:29.000Z",
            "channelId": "UCgm-Ek8Uq8-2o8B9HvQ2wpg",
            "title": "NBA 2K15 MY CAREER PLAYOFFS NFG2 PS4 - Russell Westbrook | What Happened To That Boy?!",
            "description": "NBA Finals Game 2 VS. Oklahoma City Thunder - NBA 2K15 Next Gen My Career Playoffs Gameplay Episode 58 Spam the LIKE button for more! My 2K15 My ...",
            "thumbnails": {
             "default": {
              "url": "https://i.ytimg.com/vi/FXLMMoWwT8Y/default.jpg"
             },
             "medium": {
              "url": "https://i.ytimg.com/vi/FXLMMoWwT8Y/mqdefault.jpg"
             },
             "high": {
              "url": "https://i.ytimg.com/vi/FXLMMoWwT8Y/hqdefault.jpg"
             }
            },
            "channelTitle": "IpodKingCarter",
            "liveBroadcastContent": "none"
           }
          }
         ]
        }
    };
  }

  dehydrate() {
    return this[DATA];
  }

  rehydrate(state) {
    this[DATA] = state;
  }

  get handlers() {
    return [{
      action: ChangeVideoAction,
      handler: this.handleNewVideo
    },{
      action: SetupPlayerAction,
      handler: this.handleSetupPlayer
    }, {
      action: PlayAction,
      handler: this.handlePlay
    },{
      action: PauseAction,
      handler: this.handlePause
    },{
      action: VolumeChangeAction,
      handler: this.handleVolumeChange
    }]
  }

  handlePlay(){
    this[DATA].player.playVideo();
    this[DATA].isPlaying = true;
    this.emit('change');
  }

  handlePause(){
    this[DATA].isPlaying = false;
    this[DATA].player.pauseVideo();
    this.emit('change');
  }

  handleVolumeChange(volume) {
    this[DATA].player.setVolume(volume);
  }

  handleSetupPlayer(player){
    this[DATA].player = player;
    this.emit('change');
  }

  handleNewVideo(video) {
    this[DATA]._currentVideo = video;
    this[DATA].player.loadVideoById(video.id.videoId);    
    this[DATA].isPlaying = true;
    this.emit('change');
  }

  static get currentVideo() {
    return this.getInstance().currentVideo;
  }

  get currentVideo(){
    return this[DATA]._currentVideo;
    // return this[DATA].currentVideo;
  }
  static get player() {
    return this.getInstance().player;
  }

  get player(){
    return this[DATA].player;
    // return this[DATA].currentVideo;
  }

  static get relatedVideos() {
    return this.getInstance().relatedVideos;
  }

  get relatedVideos(){
    return this[DATA].relatedVideos;
    // return this[DATA].currentVideo;
  }

  static get isPlaying() {
    return this.getInstance().isPlaying;
  }

  get isPlaying(){
    return this[DATA].isPlaying;
    // return this[DATA].currentVideo;
  }


}


const Livestream = React.createClass({
  getInitialState() {
    return {
      firstVideo: PlayerStore.currentVideo
    };
  },
  render: function() {
    let src = "https://www.youtube.com/embed/" + this.state.firstVideo.id.videoId 
    + "?enablejsapi=1&showinfo=0&controls=0"
    return (
      <div style={css.livestream}>
        <LivestreamVideo key={src} src={src} />
        <LivestreamNav />
      </div>
    );
  }
});
const LivestreamVideo = React.createClass({
  render: function() {
    console.log(this.props.src);
    return (
      <div style={css.currentVideoWrapper}>
        <img style={css.currentVideoPlaceHolder} class="ratio" src="http://placehold.it/16x9"/>
        <iframe style={css.currentVideo} id="video" src={this.props.src}
        frameborder="0" allowfullscreen></iframe>
      </div>

    );
  }
});

const LivestreamNav = React.createClass({
  getInitialState() {
    return {
      title: null,
      isPlaying: PlayerStore.isPlaying,
      currentVideo: PlayerStore.currentVideo
    };
  },
  componentDidMount() {
    PlayerStore.subscribe(this.handleChange);
    new SetupPlayerAction().exec();
  },
  handleChange() {
    this.setState({
      title: PlayerStore.currentVideo.snippet.title,
      isPlaying: PlayerStore.isPlaying
    });
  },
  clickPlay() {
    new PlayAction().exec();
  },
  clickPause() {
    new PauseAction().exec();
  },
  changeVolume(e) {
    new VolumeChangeAction(e.target.value).exec();
  },
  clickVideoChange(i) {
    new ChangeVideoAction(PlayerStore.relatedVideos.items[i]).exec();
  },
  render: function() {  
    var playOrPause;
    if(this.state.isPlaying){
      playOrPause = <button onClick={this.clickPause}>pause</button>
    }else{
      playOrPause = <button onClick={this.clickPlay}>start</button>
    }
    return (
      <div style={css.livestreamNav}>
        <div style={css.controlBar}>
        {playOrPause}
        <input type="range" min="0" max="100" onChange={this.changeVolume} />
        <span>{this.state.title}</span>
        </div>
        <div>
          {PlayerStore.relatedVideos.items.map(function(item, i) {
            return (
              <div onClick={this.clickVideoChange.bind(this, i)} key={i}>
                <img style={{width:'20px'}} src={item.snippet.thumbnails.default.url} />
                <span>{item.snippet.title}</span>
              </div>
            );
          }, this)}
        </div>
      </div>
    );
  }
});


export default Livestream;
