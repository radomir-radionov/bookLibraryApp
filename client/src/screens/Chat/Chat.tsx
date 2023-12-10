import { ChatWindow } from 'modules';
import { ChatStyled } from './style';
import useSocketSetup from 'hooks/useSocketSetup';

const Chat = () => {
  useSocketSetup();
  return (
    <ChatStyled>
      <ChatWindow />
    </ChatStyled>
  );
};

export default Chat;
