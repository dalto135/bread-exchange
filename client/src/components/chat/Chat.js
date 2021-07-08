import React from 'react';
import { ChannelList } from './ChannelList';
import './chat.scss';
export class Chat extends React.Component {

        state = {
            channels: [{ id: 1, name: 'first', participants: 10 }]
        }
        render() {
            return (
                <div classname="chat-app"></div>
‍
                    <channellist channels="{this.state.channels}"></channellist>
‍
                
            );
        }
‍}