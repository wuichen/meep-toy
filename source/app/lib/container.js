import React from 'react';
import 'normalize.css/normalize.css!';

import css from '../style';
import {merge as m} from 'meepworks/styles';

// export default class MyCom extends React.Component {
//   render() {
//     return <div>myCom</div>;
//   }
// }

const House = React.createClass({
  render: function() {
    return (
      <div>
        <Chatroom />
        <AnotherInstance />
      </div>
    );
  }
});

const Chatroom = React.createClass({
  render: function() {
    return (
      <div style={css.chatroom} className="chatroom">
        <ChatroomHeader />
        <ChatroomBreadcrumb />
        <ChatroomContent />
      </div>
    );
  }
});

const ChatroomHeader = React.createClass({
  render: function() {
    return (
      <div style={css.chatroomHeader}>
        <LogoGroup />
        <div style={css.searchBox}>
          <input style={css.searchInput } placeholder="look for..." />
          <button style={css.searchBtn}>Search</button>
        </div>
      </div>
    );
  }
});

const LogoGroup = React.createClass({
  render: function() {
    return (
      <div style= {css.sectionBox } >
        <div style={css.sectionTitle } >chats</div>
        <div style={css.sectionIconWrap } >
          <img style={css.sectionIconImage}
            src="/build/app/assets/message-icon.svg"
          />
        </div>
      </div>
    );
  }
})

const ChatroomBreadcrumb = React.createClass({
  render: function() {
    return (
      <div style={css.nav}>
        <ul style={css.navList}>
          <ChatroomBreadcrumbItem linkname="All" />
          <ChatroomBreadcrumbItem linkname="Orders" />
          <ChatroomBreadcrumbItem linkname="Products" />
        </ul>
      </div>
    );
  }
});

const ChatroomBreadcrumbItem = React.createClass({
  render: function(){
    return (
      <li style={css.navListItem } >
        <a href="#" style={css.navListItemLink}>{this.props.linkname}</a>
      </li>
    );
  }
})

const ChatroomContent = React.createClass({
  render: function() {
    return (
      <div style={css.chatroomContent}>
        <ChatList />
      </div>
    );
  }
});


const ChatList = React.createClass({
  render: function() {
    return (
      <div style={css.chatList}>
        <ChatListItem name="Aaron" message="Hi guys, how are you today?" />
        <ChatListItem name="Alexia" message="Hello! I am good. And you?" />
        <ChatListItem name="Guanjun" message="Not bad. What is up bro?" />
        <ChatListItem name="Margot" message="Salut, je suis bien :)" />
      </div>
    );
  }
});

const ChatListItem = React.createClass({
  render: function() {
    return (
      <div style={css.chatListItem}>

        <div style={css.chatListItemAvatarWrap}>
          <img style={css.chatListItemAvatarWrapImage}
            src="http://static1.squarespace.com/static/505c959284ae57cc4c2b5878/t/525f0419e4b09f9731f515cb/1381958682689/heavenmcarthur-profile-square-300px.jpg"
          />
        </div>

        <div style={css.chatListItemWords}>
          <div style={css.chatListItemWordsName}>{this.props.name}</div>
          <div style={css.chatListItemWordsMessage}>{this.props.message}</div>
        </div>

        <div style={css.chatListItemStatus}>

        </div>
      </div>
    );
  }
});


const AnotherInstance  = React.createClass({
  render: function() {
    return (
      <div className="test" style={css.anotherInstance}>
        <ChatroomHeader />
        <ChatroomAnotherContent />
      </div>
    );
  }
});

const ChatroomAnotherContent  = React.createClass({
  render: function() {
    return (
      <div style={css.chatroomAnotherContent}>
        <MessageGroup />
      </div>
    );
  }
});

const MessageGroup = React.createClass({
  render: function() {
    return (
      <div style={css.messageGroup}>
        <MessageGroupProfile />
        <MessageGroupContent />
        <MessageGroupKeyboard />
      </div>
    );
  }
});

const MessageGroupProfile = React.createClass({
  render: function() {
    return (
      <div style={css.messageGroupProfile}>
        <div style={css.messageGruopProfileName}>Milan</div>
        <div style={css.messageGruopProfileStatus}></div>
      </div>
    );
  }
});

const MessageGroupContent = React.createClass({
  render: function() {
    return (
      <div style={css.messageGroupContent}>
        <MessageGroupContentRecipient word="In my internship i'm okay now, it's a bit crazy that i have so different task each day/week. I have been designing a website (just a little), editing a video, making research for a new packaging, designing a textile layer for a hanger, making some technical drawing, and now again making a video! Haha
" />
        <MessageGroupContentYourself word="Here is all okay, last weekend we met with some friends to go to a design market and we did lots of plans. I still have to make a decision...
" />
        <MessageGroupContentRecipient word="Awh, really? Can I join you?" />
        <MessageGroupContentYourself word="Yeah, of course, come now!!!" />
        <MessageGroupContentRecipient word="In my internship i'm okay now, it's a bit crazy that i have so different task each day/week. I have been designing a website (just a little), editing a video, making research for a new packaging, designing a textile layer for a hanger, making some technical drawing, and now again making a video! Haha
" />
        <MessageGroupContentYourself word="Did lots of plans. Now i'm excited to meet and talk to more people haha it was the same with me, sometimes i am not very interested in takling to people and being nice with them, it's like unnecessary effort, but i guess i also like the experience of meeting new people, you can learn also a lot and make new contacts! I am even considering staying here in Madrid for some months, because i am involved in some little projects with people and making interesting contacts. But i'm not sure. It's like if I come back home in San Sebastian, i don't have an interesting design job offer and if I stay here in Madrid probably yes. I still have to make a decision...
" />
      </div>
    );
  }
});

const MessageGroupContentRecipient = React.createClass({
  render: function() {
    return (
      <div style={css.messageGroupContentRecipient}>


        <div style={css.messageGroupContentRecipientAvatarWrap}>
          <img style={css.messageGroupContentRecipientAvatarImage}
            src="https://igcdn-photos-e-a.akamaihd.net/hphotos-ak-xap1/t51.2885-19/10808631_563827163747836_1533517104_a.jpg"
          />
        </div>

        <div style={css.messageGroupContentRecipientWord}>
          <div style={css.messageGroupContentRecipientWordBefore}></div>
          {this.props.word}
        </div>

      </div>
    );
  }
});

const MessageGroupContentYourself = React.createClass({
  render: function() {
    return (
      <div style={css.messageGroupContentYourself}>
        <div style={css.messageGroupContentYourselfWordBefore}></div>
        <div style={css.messageGroupContentYourselfWord}>{this.props.word}</div>
        <div style={css.messageGroupContentYourselfWordAfter}></div>
      </div>
    );
  }
});

const MessageGroupKeyboard = React.createClass({
  render: function() {
    return (
      <div style={css.messageGroupKeyboard}>
        <input style={css.messageGroupKeyboardInput } placeholder="look for..." />
        <button style={css.messageGroupKeyboardBtn}>send</button>
      </div>
    );
  }
});

export default House;
