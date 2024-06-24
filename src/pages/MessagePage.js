// src/pages/MessagePage.js

import React, { useState } from 'react';
import axios from 'axios';
import './MessagePage.css';

const MessagePage = () => {
    const [message, setMessage] = useState('');
    const [messages, setMessages] = useState([]);
    const [sender_id, setSender_id] = useState('d674e3eb-7bd3-4706-b532-1412dbd7050c');
    const [receiver_id, setReceiver_id] = useState('ca4b8482-0428-44be-9f2f-89b995d6d0e1');

    const handleMessageSend = () => {
        try{
            console.log(sender_id)
            console.log(receiver_id)
            console.log(message)
            console.log("Sourabnh")
            console.log("Vasamsetti")
            const response = axios.post('http://localhost:8080/api/v1/message',  {
                sender_id: sender_id,
                receiver_id: receiver_id,
                message: message});

        }
        catch(error){}

        if (message.trim()) {
            console.log("message:"+message)
            
            setMessages([...messages, { text: message, timestamp: new Date() }]);
            setMessage('');
        }
    };

    return (
        <div className="message-page">
            <div className="message-container">
                {messages.map((msg, index) => (
                    <div key={index} className="message">
                        <div className="message-text">{msg.text}</div>
                        <div className="message-timestamp">{msg.timestamp.toLocaleTimeString()}</div>
                    </div>
                ))}
            </div>
            <div className="message-input-container">
                <input
                    type="text"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Type a message"
                    className="message-input"
                />
                <button onClick={handleMessageSend} className="send-button">Send</button>
            </div>
        </div>
    );
};

export default MessagePage;
