import React from 'react';

export class Channel extends React.Component {
    render() {
        return (
            <div classname="channel-item"></div>
‍
                <div>{this.props.name}</div>
‍
                <span>{this.props.participants}</span>
‍
            
        )
    }
‍}