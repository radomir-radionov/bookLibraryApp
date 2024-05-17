import { ChatWindow, ChatBar } from 'modules';
import { ChatBoxStyled, ChatStyled } from './style';
import { useEffect, useState } from 'react';
import socket from 'socket';
import { useSelector } from 'react-redux';
import { selectUser } from 'redux/user/selectors';

const Chat = () => {
  const [users, setUsers] = useState<any[]>([]);
  const [room, setRoom] = useState('Common');
  const [messages, setMessages] = useState<any[]>([]);
  const [ignore, setIgnore] = useState(false);
  const user = useSelector(selectUser);

  const handleRoomChange = (e: any) => {
    const value = e.target.value;
    setRoom(value);

    socket.emit('joinUser', { userId: user.id, name: user.username, room: value });
  };

  useEffect(() => {
    const handleMessageResponse = (data: any) => setMessages([...messages, data]);

    socket.on('messageResponse', handleMessageResponse);

    return () => {
      socket.off('messageResponse', handleMessageResponse);
    };
  }, [socket, messages]);

  useEffect(() => {
    const handleJoinedUser = (data: any) => setUsers(data);

    socket.on('joinedUser', handleJoinedUser);

    return () => {
      socket.off('joinedUser', handleJoinedUser);
    };
  }, [socket, users]);

  useEffect(() => {
    if (ignore) socket.emit('joinUser', { userId: user.id, name: user.username, room });

    return () => setIgnore(true);
  }, [ignore]);

  const handleNewUserMessage = (data: any) => {
    console.log('data', data);
    setMessages([...messages, data]);
  };

  useEffect(() => {
    socket.on('newUser', handleNewUserMessage);

    return () => {
      socket.off('newUser', handleNewUserMessage);
    };
  }, []);

  return (
    <ChatStyled>
      <label htmlFor='room'>
        Room
        <select name='room' id='room' value={room} onChange={handleRoomChange}>
          <option defaultValue='Common'>Choose a room</option>
          <option value='JavaScript'>JavaScript</option>
          <option value='Python'>Python</option>
          <option value='PHP'>PHP</option>
          <option value='C#'>C#</option>
          <option value='Ruby'>Ruby</option>
          <option value='Java'>Java</option>
        </select>
      </label>
      {!!room && (
        <ChatBoxStyled>
          <ChatBar room={room} users={users} />
          <ChatWindow room={room} messages={messages} setMessages={setMessages} />
        </ChatBoxStyled>
      )}
    </ChatStyled>
  );
};

export default Chat;
