import socket from 'socket';
import { Dispatch, useEffect, useRef, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import {
  ChatWindowStyled,
  ContentStyled,
  HeaderStyled,
  InfoStyled,
  InputBoxStyled,
  MeesageStyled,
  MessagesStyled,
  TextStyled,
  TypingStatusStyled,
} from './styles';
import { useDispatch, useSelector } from 'react-redux';
import { selectUser } from 'redux/user/selectors';
import moment from 'moment';
import prepareToastData from 'helpers/toast/createToast';
import { ToastTypes } from 'types/toast';
import { toastActions } from 'redux/toast';

type TProps = {
  room: string;
  messages: any[];
  setMessages: Dispatch<React.SetStateAction<any[]>>;
};

const ChatWindow = ({ room, messages, setMessages }: TProps) => {
  const lastMessageRef = useRef<HTMLDivElement>(null);
  const inputMessageRef = useRef<HTMLInputElement>(null);
  const [typingStatus, setTypingStatus] = useState('');
  const { id, username } = useSelector(selectUser);
  const dispatch = useDispatch();

  const handleMessageSubmit = (e: any) => {
    e.preventDefault();
    const targetEl = e.target.elements.msg;

    const payload = {
      room,
      message: {
        id: uuidv4(),
        socketId: socket.id,
        userId: id,
        name: username,
        text: targetEl.value,
        createdAt: moment().format('LT'),
      },
    };
    socket.emit('message', payload);
    socket.emit('clearTyping', payload);

    targetEl.value = '';
    targetEl.focus();
  };

  const leaveRoom = () => {
    socket.emit('leaveRoom', { username, room });
    window.location.reload();
  };

  const handleTyping = (event: any) => {
    const message = event.target.value.trim();

    if (message !== '') {
      console.log(1);
      socket.emit('typing', `${username} is typing`);
    } else {
      console.log(2);
      socket.emit('clearTyping');
    }
  };

  useEffect(() => {
    lastMessageRef.current?.scrollIntoView({ behavior: 'smooth' });
    inputMessageRef.current && inputMessageRef.current.focus();
  }, [messages]);

  const handleTypingResponse = (data: any) => setTypingStatus(data);
  const handleClearTypingResponse = (data: any) => setTypingStatus(data);

  const handleBroadcastMessage = (data: any) => {
    dispatch(toastActions.addToast(prepareToastData(ToastTypes.SUCCESS, data.text)));
  };

  useEffect(() => {
    socket.on('typingResponse', handleTypingResponse);
    socket.on('clearTypingResponse', handleClearTypingResponse);
    socket.on('broadcastMessage', handleBroadcastMessage);

    return () => {
      socket.off('typingResponse', handleTypingResponse);
      socket.off('clearTypingResponse', handleClearTypingResponse);
      socket.off('broadcastMessage', handleBroadcastMessage);
    };
  }, [socket]);

  return (
    <ChatWindowStyled>
      <HeaderStyled>
        <button onClick={leaveRoom}>Leave room</button>
      </HeaderStyled>
      <ContentStyled>
        <MessagesStyled>
          {messages.map((message, index) => {
            const { name, createdAt, text } = message;

            return (
              <MeesageStyled key={index} ref={lastMessageRef}>
                <TextStyled>{text}</TextStyled>
                <InfoStyled>
                  {name}, {createdAt}
                </InfoStyled>
              </MeesageStyled>
            );
          })}
        </MessagesStyled>
        <InputBoxStyled>
          <TypingStatusStyled>{typingStatus}</TypingStatusStyled>
          <form id='chat-form' onSubmit={handleMessageSubmit}>
            <input
              ref={inputMessageRef}
              id='msg'
              type='text'
              placeholder='Enter Message'
              autoComplete='off'
              onInput={handleTyping}
              required
            />
            <button type='submit' className='btn'>
              Send
            </button>
          </form>
        </InputBoxStyled>
      </ContentStyled>
    </ChatWindowStyled>
  );
};

export default ChatWindow;
