import React, { useState } from 'react';
import ChatHeader from './ChatHeader';
import ChatDisplay from './ChatDisplay';
import MatchesDisplay from './MatchesDisplay';

const ChatContainer = ({ user }) => {
  const [clickedUser, setClickedUser] = useState(null);

  console.log('clickedUser', clickedUser);

  return (
    <div className='chat-container'>
      <ChatHeader user={user} />

      <div className=''>
        <button className='option' onClick={() => setClickedUser(null)}>
          Matches
        </button>
        <button className='option' disabled={!clickedUser}>
          Chat
        </button>
      </div>

      {!clickedUser && (
        <MatchesDisplay
          matches={user.matches}
          setClickedUser={setClickedUser}
        />
      )}

      {clickedUser && <ChatDisplay user={user} clickedUser={clickedUser} />}
    </div>
  );
};

export default ChatContainer;
