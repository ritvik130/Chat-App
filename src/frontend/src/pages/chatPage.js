import React, { useEffect, useState } from 'react';
import axios from 'axios';


const chatPage = () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [chats, setChats] = useState([]);
    const fetchChats =async () => {
        const { data } = await axios.get('/api/chat');
        setChats(data);
    };
    // eslint-disable-next-line react-hooks/rules-of-hooks
    useEffect(() => {
        fetchChats();
    }, []);
    return (
        <div>
            {chats.map((chat) => (
                <div key={chat._id}>{chat.chatName}</div>
            ))}
        </div>
    )
}

export default chatPage