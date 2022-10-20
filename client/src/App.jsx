import React from 'react'
import { StreamChat } from 'stream-chat';
import { Chat } from 'stream-chat-react';
import Cookies from 'universal-cookie';
// import { ChannelContainer } from './ components';
// import { ChannelListContainer } from './ components';
import { ChannelContainer, ChannelListContainer} from './ components';


const apiKey = '5cgutp7zp385';

const client = StreamChat.getInstance(apiKey);


const App = () => {
  return (
    <div className='app_wrapper'>
        <Chat client={client} theme="team light">
            <ChannelListContainer
            
            />
            <ChannelContainer
            
            />

        </Chat>
        
      
    </div>
  )
}

export default App
