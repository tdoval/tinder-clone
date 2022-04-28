import React from 'react';
import ChatHeader from './ChatHeader';
import ChatDisplay from './ChatDisplay';
import MatchesDisplay from './MatchesDisplay';

const ChatContainer = ({ user }) => {
  return (
    <div className='chat-container'>
      <ChatHeader user={user} />

      <div className=''>
        <button className='option'>Matches</button>
        <button className='option'>Chat</button>
      </div>

      <MatchesDisplay />

      <ChatDisplay />
    </div>
  );
};

export default ChatContainer;
